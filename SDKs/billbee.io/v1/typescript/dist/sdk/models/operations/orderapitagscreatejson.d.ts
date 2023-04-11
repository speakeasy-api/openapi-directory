import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiTagsCreateJsonRequest extends SpeakeasyBase {
    /**
     * Tags to attach
     */
    rechnungsdruckWebAppControllersApiOrderTagCreate: shared.RechnungsdruckWebAppControllersApiOrderTagCreate;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiTagsCreateJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTagsCreateJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTagsCreateJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
