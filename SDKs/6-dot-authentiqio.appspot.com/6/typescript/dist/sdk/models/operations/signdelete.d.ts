import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignDeleteRequest extends SpeakeasyBase {
    /**
     * Job ID (20 chars)
     */
    job: string;
}
/**
 * Successfully deleted
 */
export declare class SignDelete200ApplicationJSON extends SpeakeasyBase {
    /**
     * done
     */
    status?: string;
}
export declare class SignDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Job not found `unknown-job`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully deleted
     */
    signDelete200ApplicationJSONObject?: SignDelete200ApplicationJSON;
}
