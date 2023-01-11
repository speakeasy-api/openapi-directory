import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetCategoriesPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogGetCategoriesHeaders extends SpeakeasyBase {
    acceptEncoding: string[];
}
export declare class CatalogGetCategoriesRequest extends SpeakeasyBase {
    pathParams: CatalogGetCategoriesPathParams;
    headers: CatalogGetCategoriesHeaders;
}
export declare class CatalogGetCategoriesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    categoryList?: shared.CategoryList;
}
