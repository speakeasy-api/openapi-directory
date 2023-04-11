import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SrcSearchlyApiV1ControllersSimilarityBySongRequest extends SpeakeasyBase {
    /**
     * Song identifier.
     */
    songId: number;
}
export declare class SrcSearchlyApiV1ControllersSimilarityBySongResponse extends SpeakeasyBase {
    /**
     * Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
     */
    apiResponseSimilarity?: shared.APIResponseSimilarity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unexpected error.
     */
    srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString?: string;
}
