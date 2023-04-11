import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CinemaSearchReadRequest extends SpeakeasyBase {
    id: string;
}
export declare class CinemaSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
