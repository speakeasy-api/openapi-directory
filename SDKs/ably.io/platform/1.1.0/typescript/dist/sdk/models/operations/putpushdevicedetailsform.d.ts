import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutPushDeviceDetailsFormRequest extends SpeakeasyBase {
    deviceDetailsInput?: shared.DeviceDetailsInput;
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * Device's ID.
     */
    deviceId: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
export declare class PutPushDeviceDetailsFormResponse extends SpeakeasyBase {
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
