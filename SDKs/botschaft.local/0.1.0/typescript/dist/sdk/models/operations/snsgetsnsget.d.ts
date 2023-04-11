import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SnsGetSnsGetRequest extends SpeakeasyBase {
    authorization?: string;
    base64Message?: string;
    message?: string;
}
export declare class SnsGetSnsGetResponse extends SpeakeasyBase {
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
    snsGetSnsGet200ApplicationJSONAny?: any;
}
