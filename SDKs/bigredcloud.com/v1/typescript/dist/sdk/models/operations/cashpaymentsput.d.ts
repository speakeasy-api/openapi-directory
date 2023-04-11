import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CashPaymentsPutRequest extends SpeakeasyBase {
    /**
     * Information of Cash Receipt to update.
     */
    cashPaymentDto: shared.CashPaymentDto;
    /**
     * Id of Cash Receipt to update.
     */
    id: number;
}
export declare class CashPaymentsPutResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPaymentsPut200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
