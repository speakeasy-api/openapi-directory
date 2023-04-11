import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogGetCustomColumnExpressionRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogGetCustomColumnExpressionResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    /**
     * Encrypted expression
     */
    catalogGetCustomColumnExpression200ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
