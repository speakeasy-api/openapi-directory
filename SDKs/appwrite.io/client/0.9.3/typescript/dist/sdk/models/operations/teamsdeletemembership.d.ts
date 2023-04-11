import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteMembershipSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class TeamsDeleteMembershipRequest extends SpeakeasyBase {
    /**
     * Membership ID.
     */
    membershipId: string;
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsDeleteMembershipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
