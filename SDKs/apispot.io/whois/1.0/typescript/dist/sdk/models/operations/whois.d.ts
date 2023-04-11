import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum WhoisFormatEnum {
    Raw = "raw",
    Formatted = "formatted",
    Json = "json"
}
export declare class WhoisRequest extends SpeakeasyBase {
    /**
     * Domain
     */
    domain: string;
    format?: WhoisFormatEnum;
}
export declare class WhoisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
