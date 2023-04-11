import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Root200ApplicationJSONLinksHolidays extends SpeakeasyBase {
    /**
     * Domain to get all holidays
     */
    href?: string;
}
export declare class Root200ApplicationJSONLinksProvinces extends SpeakeasyBase {
    /**
     * Domain to get all provinces
     */
    href?: string;
}
export declare class Root200ApplicationJSONLinksSelf extends SpeakeasyBase {
    /**
     * Root domain
     */
    href?: string;
}
export declare class Root200ApplicationJSONLinksSpec extends SpeakeasyBase {
    href?: string;
}
export declare class Root200ApplicationJSONLinks extends SpeakeasyBase {
    holidays?: Root200ApplicationJSONLinksHolidays;
    provinces?: Root200ApplicationJSONLinksProvinces;
    self?: Root200ApplicationJSONLinksSelf;
    spec?: Root200ApplicationJSONLinksSpec;
}
/**
 * OK
 */
export declare class Root200ApplicationJSON extends SpeakeasyBase {
    links?: Root200ApplicationJSONLinks;
    /**
     * A welcome message
     */
    message?: string;
}
export declare class RootResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    root200ApplicationJSONObject?: Root200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
