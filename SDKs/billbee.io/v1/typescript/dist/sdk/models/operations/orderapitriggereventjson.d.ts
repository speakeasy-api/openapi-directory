import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiTriggerEventJsonRequest extends SpeakeasyBase {
    rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer: shared.RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiTriggerEventJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTriggerEventJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTriggerEventJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
