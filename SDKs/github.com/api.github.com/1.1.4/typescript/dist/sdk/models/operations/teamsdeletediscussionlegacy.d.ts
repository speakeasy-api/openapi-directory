import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteDiscussionLegacyRequest extends SpeakeasyBase {
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsDeleteDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
