import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignRetrieveHeadRequest extends SpeakeasyBase {
    /**
     * Job ID (20 chars)
     */
    job: string;
}
export declare class SignRetrieveHeadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Job not found `unknown-job`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
