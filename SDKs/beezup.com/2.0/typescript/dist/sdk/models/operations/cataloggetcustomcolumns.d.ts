import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetCustomColumnsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogGetCustomColumnsRequest extends SpeakeasyBase {
    pathParams: CatalogGetCustomColumnsPathParams;
}
export declare class CatalogGetCustomColumnsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    customColumnList?: shared.CustomColumnList;
}
