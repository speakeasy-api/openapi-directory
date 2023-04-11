import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetMembershipsSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class TeamsGetMembershipsRequest extends SpeakeasyBase {
    /**
     * Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
     */
    limit?: number;
    /**
     * Results offset. The default value is 0. Use this param to manage pagination.
     */
    offset?: number;
    /**
     * Order result by ASC or DESC order.
     */
    orderType?: string;
    /**
     * Search term to filter your list results. Max length: 256 chars.
     */
    search?: string;
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsGetMembershipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Memberships List
     */
    membershipList?: shared.MembershipList;
}
