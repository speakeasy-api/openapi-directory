import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsListIdpGroupsForOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page token
     */
    page?: string;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Filters the results to return only those that begin with the value specified by this parameter. For example, a value of `ab` will return results that begin with "ab".
     */
    q?: string;
}
export declare class TeamsListIdpGroupsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    groupMapping?: shared.GroupMapping;
}
