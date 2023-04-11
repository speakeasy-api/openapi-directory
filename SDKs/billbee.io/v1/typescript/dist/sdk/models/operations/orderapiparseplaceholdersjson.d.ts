import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiParsePlaceholdersJsonRequest extends SpeakeasyBase {
    rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer: shared.RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiParsePlaceholdersJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiParsePlaceholdersJSON200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiParsePlaceholdersJSON200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
