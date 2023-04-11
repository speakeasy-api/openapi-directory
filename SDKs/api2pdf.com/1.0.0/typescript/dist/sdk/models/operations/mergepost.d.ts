import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MergePostResponse extends SpeakeasyBase {
    /**
     * Failed to generate PDF
     */
    apiResponseFailure?: shared.ApiResponseFailure;
    /**
     * A JSON object containing the url to the PDF and other meta data
     */
    apiResponseSuccess?: shared.ApiResponseSuccess;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
