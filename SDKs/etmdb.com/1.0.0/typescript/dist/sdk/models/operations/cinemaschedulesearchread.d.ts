import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CinemaScheduleSearchReadRequest extends SpeakeasyBase {
    movieTitle: string;
}
export declare class CinemaScheduleSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
