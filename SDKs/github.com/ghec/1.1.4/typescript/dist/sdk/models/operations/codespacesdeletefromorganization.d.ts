import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesDeleteFromOrganizationRequest extends SpeakeasyBase {
    /**
     * The name of the codespace.
     */
    codespaceName: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class CodespacesDeleteFromOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Accepted
     */
    codespacesDeleteFromOrganization202ApplicationJSONObject?: Record<string, any>;
}
