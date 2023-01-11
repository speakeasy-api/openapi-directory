import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetCustomColumnExpressionPathParams extends SpeakeasyBase {
    columnId: string;
    storeId: string;
}
export declare class CatalogGetCustomColumnExpressionRequest extends SpeakeasyBase {
    pathParams: CatalogGetCustomColumnExpressionPathParams;
}
export declare class CatalogGetCustomColumnExpressionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    catalogGetCustomColumnExpression200ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
}
