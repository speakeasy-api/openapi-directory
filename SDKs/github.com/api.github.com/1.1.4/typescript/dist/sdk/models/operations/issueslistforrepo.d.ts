import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class IssuesListForRepoQueryParams extends SpeakeasyBase {
    assignee?: string;
    creator?: string;
    direction?: shared.DirectionEnum;
    labels?: string;
    mentioned?: string;
    milestone?: string;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: shared.LabelsEnum;
    state?: shared.RepoEnum2;
}
export declare class IssuesListForRepoRequest extends SpeakeasyBase {
    pathParams: IssuesListForRepoPathParams;
    queryParams: IssuesListForRepoQueryParams;
}
export declare class IssuesListForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueSimples?: shared.IssueSimple[];
    validationError?: shared.ValidationError;
}
