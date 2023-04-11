import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiUpdateStateJsonRequest extends SpeakeasyBase {
    /**
     * The data used to change the state
     */
    rechnungsdruckWebAppControllersApiOrderStateUpdate: shared.RechnungsdruckWebAppControllersApiOrderStateUpdate;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiUpdateStateJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiUpdateStateJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiUpdateStateJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
