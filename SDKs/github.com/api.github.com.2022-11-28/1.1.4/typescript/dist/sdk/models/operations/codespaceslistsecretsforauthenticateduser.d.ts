import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListSecretsForAuthenticatedUserRequest extends SpeakeasyBase {
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
export declare class CodespacesListSecretsForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.CodespacesSecret[];
    totalCount: number;
}
export declare class CodespacesListSecretsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    codespacesListSecretsForAuthenticatedUser200ApplicationJSONObject?: CodespacesListSecretsForAuthenticatedUser200ApplicationJSON;
}
