import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiTriggerEventFormRequest extends SpeakeasyBase {
    rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer: shared.RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiTriggerEventFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTriggerEventForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTriggerEventForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
