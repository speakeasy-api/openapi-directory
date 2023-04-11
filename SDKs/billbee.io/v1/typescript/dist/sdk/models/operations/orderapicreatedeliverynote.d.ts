import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiCreateDeliveryNoteRequest extends SpeakeasyBase {
    /**
     * The internal billbee id of the order
     */
    id: number;
    /**
     * If true, the PDF is included in the response as base64 encoded string
     */
    includePdf?: boolean;
    /**
     * Optionally specify the id of a billbee connected cloud device to send the pdf to
     */
    sendToCloudId?: number;
}
export declare class OrderApiCreateDeliveryNoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiCreateDeliveryNote200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiCreateDeliveryNote200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
