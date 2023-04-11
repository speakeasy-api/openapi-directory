import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegisteredPushDevicesRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * Optional filter to restrict to devices associated with that clientId.
     */
    clientId?: string;
    /**
     * Optional filter to restrict to devices associated with that deviceId.
     */
    deviceId?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
    /**
     * The maximum number of records to return.
     */
    limit?: number;
}
export declare class GetRegisteredPushDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    deviceDetails?: shared.DeviceDetailsOutput;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
