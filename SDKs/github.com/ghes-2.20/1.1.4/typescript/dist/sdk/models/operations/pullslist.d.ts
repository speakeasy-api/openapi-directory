import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class PullsListQueryParams extends SpeakeasyBase {
    base?: string;
    direction?: shared.RepoEnum4;
    head?: string;
    page?: number;
    perPage?: number;
    sort?: shared.RepoEnum5;
    state?: shared.RepoEnum2;
}
export declare class PullsListRequest extends SpeakeasyBase {
    pathParams: PullsListPathParams;
    queryParams: PullsListQueryParams;
}
export declare class PullsListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    pullRequestSimples?: shared.PullRequestSimple[];
    validationError?: shared.ValidationError;
}
