import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateDiscussionInOrgRequestBody extends SpeakeasyBase {
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
export declare class TeamsCreateDiscussionInOrgRequest extends SpeakeasyBase {
    requestBody: TeamsCreateDiscussionInOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsCreateDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
