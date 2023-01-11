import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PrivateCollectionsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}
export declare enum PrivateCollectionsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PrivateCollectionsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    order?: PrivateCollectionsListOrderEnum;
    orderDirection?: PrivateCollectionsListOrderDirectionEnum;
    page?: number;
    pageSize?: number;
}
export declare class PrivateCollectionsListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateCollectionsListRequest extends SpeakeasyBase {
    queryParams: PrivateCollectionsListQueryParams;
    security: PrivateCollectionsListSecurity;
}
export declare class PrivateCollectionsListResponse extends SpeakeasyBase {
    collections?: shared.Collection[];
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
