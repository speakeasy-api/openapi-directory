import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionRequestBody extends SpeakeasyBase {
    /**
     * The discussion post's body text.
     */
    body?: string;
    /**
     * The discussion post's title.
     */
    title?: string;
}
export declare class TeamsUpdateDiscussionRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateDiscussionRequestBody;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
