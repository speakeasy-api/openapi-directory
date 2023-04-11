import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchOperationsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchOperationsRequest extends SpeakeasyBase {
    /**
     * Optional comma-separated list of resource owner unique identifiers by which to filter results.
     */
    resourceOwnerId?: string;
}
export declare class FetchOperationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    /**
     * Returns the requested operations.
     */
    operations?: shared.Operations;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
