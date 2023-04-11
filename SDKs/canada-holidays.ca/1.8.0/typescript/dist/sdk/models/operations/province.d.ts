import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
 */
export declare enum ProvinceOptionalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
/**
 * A Canadian province abbreviation
 */
export declare enum ProvinceProvinceIDEnum {
    Ab = "AB",
    Bc = "BC",
    Mb = "MB",
    Nb = "NB",
    Nl = "NL",
    Ns = "NS",
    Nt = "NT",
    Nu = "NU",
    On = "ON",
    Pe = "PE",
    Qc = "QC",
    Sk = "SK",
    Yt = "YT"
}
export declare class ProvinceRequest extends SpeakeasyBase {
    /**
     * A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
     */
    optional?: ProvinceOptionalEnum;
    /**
     * A Canadian province abbreviation
     */
    provinceId: ProvinceProvinceIDEnum;
    /**
     * A calendar year
     */
    year?: number;
}
/**
 * Bad Request
 */
export declare class Province400ApplicationJSON extends SpeakeasyBase {
    error?: shared.ErrorT;
}
/**
 * OK
 */
export declare class Province200ApplicationJSON extends SpeakeasyBase {
    /**
     * A Canadian province or territory
     */
    province?: shared.Province;
}
export declare class ProvinceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    province200ApplicationJSONObject?: Province200ApplicationJSON;
    /**
     * Bad Request
     */
    province400ApplicationJSONObject?: Province400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
