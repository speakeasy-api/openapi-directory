import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddSSHKeyAddSSHKeyRequestBody extends SpeakeasyBase {
    /**
     * Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format.
     */
    publicKey: string;
    /**
     * ID of the user to assign the new key to.
     */
    userId: number;
}
export declare class AddSSHKeyRequest extends SpeakeasyBase {
    requestBody?: AddSSHKeyAddSSHKeyRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
}
export declare class AddSSHKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    sshKeyResponse?: shared.SSHKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
