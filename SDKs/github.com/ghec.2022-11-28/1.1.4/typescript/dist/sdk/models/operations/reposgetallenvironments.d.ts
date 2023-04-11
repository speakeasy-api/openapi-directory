import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetAllEnvironmentsRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Response
 */
export declare class ReposGetAllEnvironments200ApplicationJSON extends SpeakeasyBase {
    environments?: shared.Environment[];
    /**
     * The number of environments in this repository
     */
    totalCount?: number;
}
export declare class ReposGetAllEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reposGetAllEnvironments200ApplicationJSONObject?: ReposGetAllEnvironments200ApplicationJSON;
}
