import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddSshKeyRequest extends SpeakeasyBase {
    /**
     * SSH key public key.
     */
    addSshKeyRequest?: shared.AddSshKeyRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class AddSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
