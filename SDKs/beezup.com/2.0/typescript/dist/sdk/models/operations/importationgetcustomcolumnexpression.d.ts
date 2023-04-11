import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetCustomColumnExpressionRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetCustomColumnExpressionResponse extends SpeakeasyBase {
    /**
     * ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    /**
     * Encrypted expression
     */
    importationGetCustomColumnExpression200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
