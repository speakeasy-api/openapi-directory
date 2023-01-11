import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsListForTeamDiscussionQueryParams extends SpeakeasyBase {
    content?: shared.DiscussionNumberEnum1;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReactionsListForTeamDiscussionRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionPathParams;
    queryParams: ReactionsListForTeamDiscussionQueryParams;
    headers: ReactionsListForTeamDiscussionHeaders;
}
export declare class ReactionsListForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
