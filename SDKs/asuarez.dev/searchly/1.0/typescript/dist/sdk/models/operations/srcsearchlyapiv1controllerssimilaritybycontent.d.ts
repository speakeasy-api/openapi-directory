import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Body wrapper for the request.
 */
export declare class SrcSearchlyApiV1ControllersSimilarityByContentRequestBody extends SpeakeasyBase {
    /**
     * Content for searching similarity.
     */
    content?: string;
}
export declare class SrcSearchlyApiV1ControllersSimilarityByContentResponse extends SpeakeasyBase {
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
    srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString?: string;
}
