import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscribeDownloadSharesRequest extends SpeakeasyBase {
    updateSubscriptionsBulkRequest: shared.UpdateSubscriptionsBulkRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class SubscribeDownloadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
