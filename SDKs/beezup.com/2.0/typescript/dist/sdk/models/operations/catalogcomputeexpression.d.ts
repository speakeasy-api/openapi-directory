import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogComputeExpressionPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogComputeExpressionRequest extends SpeakeasyBase {
    pathParams: CatalogComputeExpressionPathParams;
    request: shared.ComputeExpressionRequest;
}
export declare class CatalogComputeExpressionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    catalogComputeExpression200ApplicationJSONString?: string;
    catalogComputeExpression400ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
}
