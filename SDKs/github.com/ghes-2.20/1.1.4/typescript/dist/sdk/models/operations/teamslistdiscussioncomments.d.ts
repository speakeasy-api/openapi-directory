import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionCommentsPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsListDiscussionCommentsQueryParams extends SpeakeasyBase {
    direction?: shared.DiscussionNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionCommentsRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionCommentsPathParams;
    queryParams: TeamsListDiscussionCommentsQueryParams;
}
export declare class TeamsListDiscussionCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
