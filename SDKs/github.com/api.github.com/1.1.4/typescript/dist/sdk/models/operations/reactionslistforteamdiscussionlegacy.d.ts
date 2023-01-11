import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsListForTeamDiscussionLegacyQueryParams extends SpeakeasyBase {
    content?: shared.DiscussionNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionLegacyPathParams;
    queryParams: ReactionsListForTeamDiscussionLegacyQueryParams;
}
export declare class ReactionsListForTeamDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
