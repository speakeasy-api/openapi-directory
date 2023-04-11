import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreTrackedExternalOrdersRequest extends SpeakeasyBase {
    /**
     * The amount of external orders to retrieve
     */
    count?: number;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreTrackedExternalOrdersResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * External Order list
     */
    trackedExternalOrders?: shared.TrackedExternalOrders;
}
