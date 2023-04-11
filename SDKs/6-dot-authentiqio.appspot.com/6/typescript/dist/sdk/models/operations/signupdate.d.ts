import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SignUpdateRequest extends SpeakeasyBase {
    /**
     * Job ID (20 chars)
     */
    job: string;
}
/**
 * Successfully updated
 */
export declare class SignUpdate200ApplicationJwt extends SpeakeasyBase {
    /**
     * result is JWT or JSON??
     */
    jwt?: string;
    /**
     * ready
     */
    status?: string;
}
export declare class SignUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
