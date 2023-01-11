import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class ReactionsListForTeamDiscussionInOrgQueryParams extends SpeakeasyBase {
    content?: shared.DiscussionNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionInOrgPathParams;
    queryParams: ReactionsListForTeamDiscussionInOrgQueryParams;
}
export declare class ReactionsListForTeamDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
