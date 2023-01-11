import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ProjectsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}
export declare enum ProjectsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ProjectsListQueryParams extends SpeakeasyBase {
    group?: number;
    institution?: number;
    limit?: number;
    offset?: number;
    order?: ProjectsListOrderEnum;
    orderDirection?: ProjectsListOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
}
export declare class ProjectsListRequest extends SpeakeasyBase {
    queryParams: ProjectsListQueryParams;
}
export declare class ProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    projects?: shared.Project[];
    statusCode: number;
}
