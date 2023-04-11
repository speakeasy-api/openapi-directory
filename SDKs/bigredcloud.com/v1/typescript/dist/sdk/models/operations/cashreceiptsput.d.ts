import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CashReceiptsPutRequest extends SpeakeasyBase {
    /**
     * Information of Cash Receipt to update.
     */
    cashReceiptDto: shared.CashReceiptDto;
    /**
     * Id of Cash Receipt to update.
     */
    id: number;
}
export declare class CashReceiptsPutResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashReceiptsPut200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
