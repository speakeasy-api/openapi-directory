import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetDiscussionInOrgRequest extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsGetDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
