import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigPropertyRequest extends SpeakeasyBase {
    configNodeName: string;
}
export declare class PostConfigPropertyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
