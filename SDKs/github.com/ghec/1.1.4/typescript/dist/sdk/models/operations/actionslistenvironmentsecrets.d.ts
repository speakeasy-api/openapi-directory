import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListEnvironmentSecretsRequest extends SpeakeasyBase {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
/**
 * Response
 */
export declare class ActionsListEnvironmentSecrets200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.ActionsSecret[];
    totalCount: number;
}
export declare class ActionsListEnvironmentSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListEnvironmentSecrets200ApplicationJSONObject?: ActionsListEnvironmentSecrets200ApplicationJSON;
}
