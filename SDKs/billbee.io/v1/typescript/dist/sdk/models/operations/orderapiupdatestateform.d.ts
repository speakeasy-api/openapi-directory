import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiUpdateStateFormRequest extends SpeakeasyBase {
    /**
     * The data used to change the state
     */
    rechnungsdruckWebAppControllersApiOrderStateUpdate: shared.RechnungsdruckWebAppControllersApiOrderStateUpdate;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiUpdateStateFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiUpdateStateForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiUpdateStateForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
