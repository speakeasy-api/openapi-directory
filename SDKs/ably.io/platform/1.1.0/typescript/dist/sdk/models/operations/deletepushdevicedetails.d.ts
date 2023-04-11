import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePushDeviceDetailsRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * Filter to restrict to subscriptions associated with that channel.
     */
    channel?: string;
    /**
     * Must be set when deviceId is empty, cannot be used with deviceId.
     */
    clientId?: string;
    /**
     * Must be set when clientId is empty, cannot be used with clientId.
     */
    deviceId?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
export declare class DeletePushDeviceDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
