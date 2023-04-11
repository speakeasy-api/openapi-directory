import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionInOrgRequestBody extends SpeakeasyBase {
    /**
     * The discussion post's body text.
     */
    body?: string;
    /**
     * The discussion post's title.
     */
    title?: string;
}
export declare class TeamsUpdateDiscussionInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateDiscussionInOrgRequestBody;
    discussionNumber: number;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsUpdateDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
