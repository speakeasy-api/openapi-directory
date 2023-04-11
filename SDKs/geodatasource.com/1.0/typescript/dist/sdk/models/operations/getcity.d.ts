import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetCityFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetCityRequest extends SpeakeasyBase {
    format?: GetCityFormatEnum;
    key: string;
    lat: number;
    lng: number;
}
export declare class GetCityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get response from longitude latitude lookup
     */
    getCity200ApplicationJSONString?: string;
}
