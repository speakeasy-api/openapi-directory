import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGlobalRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `400` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
