import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PrivateProjectsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}
export declare enum PrivateProjectsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum PrivateProjectsListStorageEnum {
    Group = "group",
    Individual = "individual"
}
export declare class PrivateProjectsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    order?: PrivateProjectsListOrderEnum;
    orderDirection?: PrivateProjectsListOrderDirectionEnum;
    page?: number;
    pageSize?: number;
    roles?: string;
    storage?: PrivateProjectsListStorageEnum;
}
export declare class PrivateProjectsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectsListRequest extends SpeakeasyBase {
    queryParams: PrivateProjectsListQueryParams;
    security: PrivateProjectsListSecurity;
}
export declare class PrivateProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    projectPrivates?: shared.ProjectPrivate[];
    statusCode: number;
}
