import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListSelectedReposForOrgSecretRequest extends SpeakeasyBase {
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
     * The name of the secret.
     */
    secretName: string;
}
/**
 * Response
 */
export declare class CodespacesListSelectedReposForOrgSecret200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.MinimalRepository[];
    totalCount: number;
}
export declare class CodespacesListSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codespacesListSelectedReposForOrgSecret200ApplicationJSONObject?: CodespacesListSelectedReposForOrgSecret200ApplicationJSON;
}
