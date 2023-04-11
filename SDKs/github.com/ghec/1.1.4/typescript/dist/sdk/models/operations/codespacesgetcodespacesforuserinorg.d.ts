import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesGetCodespacesForUserInOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
/**
 * Response
 */
export declare class CodespacesGetCodespacesForUserInOrg200ApplicationJSON extends SpeakeasyBase {
    codespaces: shared.Codespace[];
    totalCount: number;
}
export declare class CodespacesGetCodespacesForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codespacesGetCodespacesForUserInOrg200ApplicationJSONObject?: CodespacesGetCodespacesForUserInOrg200ApplicationJSON;
}
