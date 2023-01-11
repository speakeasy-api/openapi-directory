import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesListForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class IssuesListForOrgQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    filter?: shared.OrgEnum;
    labels?: string;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: shared.LabelsEnum;
    state?: shared.OrgEnum1;
}
export declare class IssuesListForOrgRequest extends SpeakeasyBase {
    pathParams: IssuesListForOrgPathParams;
    queryParams: IssuesListForOrgQueryParams;
}
export declare class IssuesListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issues?: shared.Issue[];
}
