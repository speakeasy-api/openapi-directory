import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectsSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}
export declare enum ProjectsSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ProjectsSearch extends SpeakeasyBase {
    group?: number;
    institution?: number;
    limit?: number;
    modifiedSince?: string;
    offset?: number;
    order?: ProjectsSearchOrderEnum;
    orderDirection?: ProjectsSearchOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    publishedSince?: string;
    searchFor?: string;
}
