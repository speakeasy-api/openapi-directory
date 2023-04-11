import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SnsPostSnsPostRequest extends SpeakeasyBase {
    snsMessageRequest: shared.SnsMessageRequest;
    authorization?: string;
}
export declare class SnsPostSnsPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    snsPostSnsPost200ApplicationJSONAny?: any;
}
