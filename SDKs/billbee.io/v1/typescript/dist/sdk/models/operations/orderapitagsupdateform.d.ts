import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiTagsUpdateFormRequest extends SpeakeasyBase {
    /**
     * Tags to attach
     */
    rechnungsdruckWebAppControllersApiOrderTagCreate: shared.RechnungsdruckWebAppControllersApiOrderTagCreate;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiTagsUpdateFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTagsUpdateForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTagsUpdateForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
