import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiTagsUpdateJsonRequest extends SpeakeasyBase {
    /**
     * Tags to attach
     */
    rechnungsdruckWebAppControllersApiOrderTagCreate: shared.RechnungsdruckWebAppControllersApiOrderTagCreate;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiTagsUpdateJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTagsUpdateJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTagsUpdateJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
