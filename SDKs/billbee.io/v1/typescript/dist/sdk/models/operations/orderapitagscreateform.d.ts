import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiTagsCreateFormRequest extends SpeakeasyBase {
    /**
     * Tags to attach
     */
    rechnungsdruckWebAppControllersApiOrderTagCreate: shared.RechnungsdruckWebAppControllersApiOrderTagCreate;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiTagsCreateFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTagsCreateForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTagsCreateForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
