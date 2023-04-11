import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrgUsersRequest extends SpeakeasyBase {
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     */
    perPage?: number;
    username: string;
}
export declare class GetOrgUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An Organization's users
     */
    users?: shared.User[];
}
