import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiSendMessageFormRequest extends SpeakeasyBase {
    /**
     * The message model
     */
    rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel: shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiSendMessageFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiSendMessageForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiSendMessageForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
