import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFactNumbersSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetFactNumbersRequest extends SpeakeasyBase {
    /**
     * Number value
     */
    number: number;
}
export declare class GetFactNumbersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
