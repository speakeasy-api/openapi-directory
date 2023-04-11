import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetMembershipForUserRequest extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsGetMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamMembership?: shared.TeamMembership;
}
