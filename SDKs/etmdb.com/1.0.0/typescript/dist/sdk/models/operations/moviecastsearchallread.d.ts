import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MovieCastSearchallReadRequest extends SpeakeasyBase {
    param: string;
}
export declare class MovieCastSearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
