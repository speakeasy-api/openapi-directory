import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SrcSearchlyApiV1ControllersSongSearchRequest extends SpeakeasyBase {
    /**
     * Query.
     */
    query: string;
}
export declare class SrcSearchlyApiV1ControllersSongSearchResponse extends SpeakeasyBase {
    /**
     * Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
     */
    apiResponseSong?: shared.APIResponseSong;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unexpected error.
     */
    srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString?: string;
}
