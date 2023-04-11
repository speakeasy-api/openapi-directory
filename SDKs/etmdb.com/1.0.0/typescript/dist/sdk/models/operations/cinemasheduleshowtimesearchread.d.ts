import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CinemaSheduleShowtimeSearchReadRequest extends SpeakeasyBase {
    movieTitle: string;
}
export declare class CinemaSheduleShowtimeSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
