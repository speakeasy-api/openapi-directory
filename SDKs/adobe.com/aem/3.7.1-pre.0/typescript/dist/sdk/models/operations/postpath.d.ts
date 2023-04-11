import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPathRequest extends SpeakeasyBase {
    name: string;
    jcrPrimaryType: string;
    path: string;
}
export declare class PostPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
