import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FilmographyTypeSearchReadRequest extends SpeakeasyBase {
    filmographyDescription: string;
}
export declare class FilmographyTypeSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
