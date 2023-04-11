import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetProductSampleCustomColumnValueRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Index of the product sample. Starting from 0 to 99.
     */
    productSampleIndex: number;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetProductSampleCustomColumnValueResponse extends SpeakeasyBase {
    /**
     * ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Product sample custom column value
     */
    importationGetProductSampleCustomColumnValue200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
