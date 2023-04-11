import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSSHKeyRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    id: string;
}
export declare class GetSSHKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    sshKeyResponse?: shared.SSHKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
