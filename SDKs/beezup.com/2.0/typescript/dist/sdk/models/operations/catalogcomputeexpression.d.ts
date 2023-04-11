import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogComputeExpressionRequest extends SpeakeasyBase {
    computeExpressionRequest: shared.ComputeExpressionRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogComputeExpressionResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    /**
     * Compute an expression
     */
    catalogComputeExpression200ApplicationJSONString?: string;
    /**
     * Occurs when the expression cannot be computed
     */
    catalogComputeExpression400ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
