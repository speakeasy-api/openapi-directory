import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiCoreDtoConversionsConversionProtocolEnum {
    Http = "Http",
    Https = "Https"
}
/**
 * The body of the conversion
 */
export declare class ApiCoreDtoConversionsConversion extends SpeakeasyBase {
    code?: string;
    /**
     *  (A date in "YmdHis" format)
     */
    creationDate?: string;
    deleted?: boolean;
    description?: string;
    id?: number;
    name?: string;
    protocol?: ApiCoreDtoConversionsConversionProtocolEnum;
    value?: number;
}
