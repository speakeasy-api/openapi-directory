import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListDiscussionsPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListDiscussionsQueryParams extends SpeakeasyBase {
    direction?: shared.TeamIdEnum;
    page?: number;
    perPage?: number;
}
export declare class TeamsListDiscussionsRequest extends SpeakeasyBase {
    pathParams: TeamsListDiscussionsPathParams;
    queryParams: TeamsListDiscussionsQueryParams;
}
export declare class TeamsListDiscussionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    teamDiscussions?: shared.TeamDiscussion[];
}
