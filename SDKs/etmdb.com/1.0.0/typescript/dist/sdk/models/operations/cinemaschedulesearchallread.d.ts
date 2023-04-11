import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CinemaScheduleSearchallReadRequest extends SpeakeasyBase {
    param: string;
}
export declare class CinemaScheduleSearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
