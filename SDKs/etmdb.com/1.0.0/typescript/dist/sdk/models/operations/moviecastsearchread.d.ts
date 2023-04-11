import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MovieCastSearchReadRequest extends SpeakeasyBase {
    movieTitle: string;
}
export declare class MovieCastSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
