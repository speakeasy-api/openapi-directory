import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateDiscussionLegacyRequestBody extends SpeakeasyBase {
    /**
     * The discussion post's body text.
     */
    body: string;
    /**
     * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
     */
    private?: boolean;
    /**
     * The discussion post's title.
     */
    title: string;
}
export declare class TeamsCreateDiscussionLegacyRequest extends SpeakeasyBase {
    requestBody: TeamsCreateDiscussionLegacyRequestBody;
    teamId: number;
}
export declare class TeamsCreateDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
