import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
 */
export declare enum ProvincesOptionalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
export declare class ProvincesRequest extends SpeakeasyBase {
    /**
     * A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
     */
    optional?: ProvincesOptionalEnum;
    /**
     * A calendar year
     */
    year?: number;
}
/**
 * OK
 */
export declare class Provinces200ApplicationJSON extends SpeakeasyBase {
    provinces?: shared.Province[];
}
export declare class ProvincesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    provinces200ApplicationJSONObject?: Provinces200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
