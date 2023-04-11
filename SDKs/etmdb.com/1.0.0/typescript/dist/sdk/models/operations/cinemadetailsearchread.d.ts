import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CinemaDetailSearchReadRequest extends SpeakeasyBase {
    cinemaName: string;
}
export declare class CinemaDetailSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
