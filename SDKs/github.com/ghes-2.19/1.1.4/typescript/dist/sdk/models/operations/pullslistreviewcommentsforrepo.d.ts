import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListReviewCommentsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class PullsListReviewCommentsForRepoQueryParams extends SpeakeasyBase {
    direction?: shared.RepoEnum4;
    page?: number;
    perPage?: number;
    since?: Date;
    sort?: shared.RepoEnum6;
}
export declare class PullsListReviewCommentsForRepoRequest extends SpeakeasyBase {
    pathParams: PullsListReviewCommentsForRepoPathParams;
    queryParams: PullsListReviewCommentsForRepoQueryParams;
}
export declare class PullsListReviewCommentsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    pullRequestReviewComments?: shared.PullRequestReviewComment[];
}
