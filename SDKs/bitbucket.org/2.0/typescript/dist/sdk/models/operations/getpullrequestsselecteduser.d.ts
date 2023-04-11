import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPullrequestsSelectedUserSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Only return pull requests that are in this state. This parameter can be repeated.
 */
export declare enum GetPullrequestsSelectedUserStateEnum {
    Open = "OPEN",
    Merged = "MERGED",
    Declined = "DECLINED",
    Superseded = "SUPERSEDED"
}
export declare class GetPullrequestsSelectedUserRequest extends SpeakeasyBase {
    /**
     * This can either be the username of the pull request author, the author's UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{account UUID}`, or the author's Atlassian ID.
     *
     */
    selectedUser: string;
    /**
     * Only return pull requests that are in this state. This parameter can be repeated.
     */
    state?: GetPullrequestsSelectedUserStateEnum;
}
export declare class GetPullrequestsSelectedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified user does not exist.
     */
    error?: Record<string, any>;
    /**
     * All pull requests authored by the specified user.
     */
    paginatedPullrequests?: shared.PaginatedPullrequests;
}
