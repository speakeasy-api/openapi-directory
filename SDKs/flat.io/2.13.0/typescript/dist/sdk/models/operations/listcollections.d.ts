import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListCollectionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum ListCollectionsSortEnum {
    CreationDate = "creationDate",
    Title = "title"
}
export declare class ListCollectionsQueryParams extends SpeakeasyBase {
    direction?: ListCollectionsDirectionEnum;
    limit?: number;
    next?: string;
    parent?: string;
    previous?: string;
    sort?: ListCollectionsSortEnum;
}
export declare class ListCollectionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ListCollectionsRequest extends SpeakeasyBase {
    queryParams: ListCollectionsQueryParams;
    security: ListCollectionsSecurity;
}
export declare class ListCollectionsResponse extends SpeakeasyBase {
    collections?: shared.Collection[];
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
