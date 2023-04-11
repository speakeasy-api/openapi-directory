import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListOrgSecretsRequest extends SpeakeasyBase {
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
}
/**
 * Response
 */
export declare class CodespacesListOrgSecrets200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.CodespacesOrgSecret[];
    totalCount: number;
}
export declare class CodespacesListOrgSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    codespacesListOrgSecrets200ApplicationJSONObject?: CodespacesListOrgSecrets200ApplicationJSON;
}
