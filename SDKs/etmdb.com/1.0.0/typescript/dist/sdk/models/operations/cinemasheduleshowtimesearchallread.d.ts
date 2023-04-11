import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CinemaSheduleShowtimeSearchallReadRequest extends SpeakeasyBase {
    param: string;
}
export declare class CinemaSheduleShowtimeSearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
