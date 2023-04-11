import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscribeUploadSharesRequest extends SpeakeasyBase {
    updateSubscriptionsBulkRequest: shared.UpdateSubscriptionsBulkRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class SubscribeUploadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
