import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveMembershipForUserRequest extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsRemoveMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
