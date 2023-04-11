import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersRequest extends SpeakeasyBase {
    /**
     * Restrict results to the users who have contributed to this assignment.
     */
    assignment?: string;
    /**
     * Restrict results to the users who have submitted a contribution with a public location located within this country.
     */
    country?: string;
    /**
     * Restrict results to the users who a linked profile of this type.
     */
    linkedProfile?: string;
    /**
     * Restrict results to the users who have submitted at least this many contributions.
     */
    minimumContributions?: number;
    /**
     * Restrict results to the users who are owned by of this owner.
     */
    ownedBy?: string;
    /**
     * Limit results to users who have submitted at least one contribution after this date time.
     */
    submittedAfter?: Date;
    /**
     * Limit results to users who have submitted at least one contribution before this date time.
     */
    submittedBefore?: Date;
    /**
     * Restrict results to the user with this username.
     */
    username?: string;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of users
     */
    users?: shared.User[];
}
