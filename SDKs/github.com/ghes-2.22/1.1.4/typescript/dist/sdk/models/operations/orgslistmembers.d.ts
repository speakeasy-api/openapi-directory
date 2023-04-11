import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter members returned in the list. Can be one of:
 *
 * @remarks
 * \* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.
 * \* `all` - All members the authenticated user can see.
 */
export declare enum OrgsListMembersFilterEnum {
    TwofaDisabled = "2fa_disabled",
    All = "all"
}
/**
 * Filter members returned by their role. Can be one of:
 *
 * @remarks
 * \* `all` - All members of the organization, regardless of role.
 * \* `admin` - Organization owners.
 * \* `member` - Non-owner organization members.
 */
export declare enum OrgsListMembersRoleEnum {
    All = "all",
    Admin = "admin",
    Member = "member"
}
export declare class OrgsListMembersRequest extends SpeakeasyBase {
    /**
     * Filter members returned in the list. Can be one of:
     *
     * @remarks
     * \* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.
     * \* `all` - All members the authenticated user can see.
     */
    filter?: OrgsListMembersFilterEnum;
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Filter members returned by their role. Can be one of:
     *
     * @remarks
     * \* `all` - All members of the organization, regardless of role.
     * \* `admin` - Organization owners.
     * \* `member` - Non-owner organization members.
     */
    role?: OrgsListMembersRoleEnum;
}
export declare class OrgsListMembersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
