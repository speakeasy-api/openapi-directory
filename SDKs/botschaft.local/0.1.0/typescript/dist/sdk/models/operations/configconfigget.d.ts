import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigConfigGetRequest extends SpeakeasyBase {
    authorization?: string;
}
export declare class ConfigConfigGetResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    config?: shared.Config;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
