import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostBlockedNumbersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostBlockedNumbersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
