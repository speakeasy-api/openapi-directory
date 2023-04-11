import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GenreTypeSearchReadRequest extends SpeakeasyBase {
    genreDescription: string;
}
export declare class GenreTypeSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
