import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetDiscussionRequest extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsGetDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
