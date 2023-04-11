import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * The field by which to order.
 */
export declare enum PrivateProjectsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}
export declare enum PrivateProjectsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * only return collections from this institution
 */
export declare enum PrivateProjectsListStorageEnum {
    Group = "group",
    Individual = "individual"
}
export declare class PrivateProjectsListRequest extends SpeakeasyBase {
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * The field by which to order.
     */
    order?: PrivateProjectsListOrderEnum;
    orderDirection?: PrivateProjectsListOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Any combination of owner, collaborator, viewer separated by comma. Examples: "owner" or "owner,collaborator".
     */
    roles?: string;
    /**
     * only return collections from this institution
     */
    storage?: PrivateProjectsListStorageEnum;
}
export declare class PrivateProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of projects
     */
    projectPrivates?: shared.ProjectPrivate[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
