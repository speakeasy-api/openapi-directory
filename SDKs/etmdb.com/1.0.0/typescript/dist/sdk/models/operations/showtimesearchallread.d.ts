import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShowtimeSearchallReadRequest extends SpeakeasyBase {
    param: string;
}
export declare class ShowtimeSearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
