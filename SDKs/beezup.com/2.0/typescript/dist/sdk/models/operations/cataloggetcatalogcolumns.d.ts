import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetCatalogColumnsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogGetCatalogColumnsRequest extends SpeakeasyBase {
    pathParams: CatalogGetCatalogColumnsPathParams;
}
export declare class CatalogGetCatalogColumnsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    catalogColumnList?: shared.CatalogColumnList;
}
