import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiSendMessageJsonRequest extends SpeakeasyBase {
    /**
     * The message model
     */
    rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel: shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiSendMessageJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiSendMessageJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiSendMessageJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
