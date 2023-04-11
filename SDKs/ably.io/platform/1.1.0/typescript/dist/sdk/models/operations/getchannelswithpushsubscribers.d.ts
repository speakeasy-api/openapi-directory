import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelsWithPushSubscribersRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
export declare class GetChannelsWithPushSubscribersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getChannelsWithPushSubscribers2XXApplicationJSONStrings?: string[];
}
