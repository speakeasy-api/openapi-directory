import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentsPutRequest extends SpeakeasyBase {
    /**
     * Information of Payment to update.
     */
    paymentDto: shared.PaymentDto;
    /**
     * Id of Payment to update.
     */
    id: number;
}
export declare class PaymentsPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentsPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
