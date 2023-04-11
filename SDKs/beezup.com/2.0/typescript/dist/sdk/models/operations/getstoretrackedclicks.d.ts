import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreTrackedClicksRequest extends SpeakeasyBase {
    /**
     * The amount of clicks to retrieve
     */
    count?: number;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreTrackedClicksResponse extends SpeakeasyBase {
    /**
     * Store or resource not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Click list
     */
    trackedClicks?: shared.TrackedClicks;
}
