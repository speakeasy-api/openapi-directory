import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConvertAPIRequestBody extends SpeakeasyBase {
    url?: string;
}
export declare enum ConvertAPIFormatEnum {
    Swagger10 = "swagger10",
    Swagger20 = "swagger20",
    Swaggeryaml = "swaggeryaml",
    Apiblueprint = "apiblueprint",
    Wadl2009 = "wadl2009",
    Raml = "raml",
    Apimatic = "apimatic"
}
export declare class ConvertAPIRequest extends SpeakeasyBase {
    requestBody?: ConvertAPIRequestBody;
    format: ConvertAPIFormatEnum;
}
export declare class ConvertAPIResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * The converted API specification
     */
    convertAPI200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
