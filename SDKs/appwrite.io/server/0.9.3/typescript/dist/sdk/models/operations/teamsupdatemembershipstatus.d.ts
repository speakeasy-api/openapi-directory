import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateMembershipStatusSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class TeamsUpdateMembershipStatusRequestBody extends SpeakeasyBase {
    /**
     * Secret key.
     */
    secret: string;
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class TeamsUpdateMembershipStatusRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateMembershipStatusRequestBody;
    /**
     * Membership ID.
     */
    membershipId: string;
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsUpdateMembershipStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Membership
     */
    membership?: shared.Membership;
}
