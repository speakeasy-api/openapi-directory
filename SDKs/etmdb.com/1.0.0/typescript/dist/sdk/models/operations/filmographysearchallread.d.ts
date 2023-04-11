import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FilmographySearchallReadRequest extends SpeakeasyBase {
    param: string;
}
export declare class FilmographySearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
