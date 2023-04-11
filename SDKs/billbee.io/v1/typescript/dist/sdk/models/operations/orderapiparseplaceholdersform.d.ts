import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiParsePlaceholdersFormRequest extends SpeakeasyBase {
    rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer: shared.RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiParsePlaceholdersFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiParsePlaceholdersForm200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiParsePlaceholdersForm200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
