import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiFindRequest extends SpeakeasyBase {
    /**
     * The order id from the external system
     */
    id: string;
    /**
     * Optional the name of the shop/marketplace the order was imported from
     */
    partner: string;
}
export declare class OrderApiFindResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiFind200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiFind200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
