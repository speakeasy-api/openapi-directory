import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnregisterAllPushDevicesRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.
     */
    clientId?: string;
    /**
     * Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.
     */
    deviceId?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
export declare class UnregisterAllPushDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
