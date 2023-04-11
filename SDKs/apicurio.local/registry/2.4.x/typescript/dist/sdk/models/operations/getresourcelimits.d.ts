import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourceLimitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * On success, returns resource limits
     */
    limits?: shared.Limits;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
