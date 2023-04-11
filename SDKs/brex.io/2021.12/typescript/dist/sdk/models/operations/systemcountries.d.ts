import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Detailed information about the error
 */
export declare class SystemCountriesDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class SystemCountries200ApplicationJSON extends SpeakeasyBase {
    countryCode?: string;
    countryName?: string;
}
export declare class SystemCountriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of countries
     */
    systemCountries200ApplicationJSONObjects?: SystemCountries200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    systemCountriesDefaultApplicationJSONObject?: SystemCountriesDefaultApplicationJSON;
}
