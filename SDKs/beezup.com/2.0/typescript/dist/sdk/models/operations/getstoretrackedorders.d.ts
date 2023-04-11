import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreTrackedOrdersRequest extends SpeakeasyBase {
    /**
     * The amount of orders to retrieve
     */
    count?: number;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreTrackedOrdersResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Order list
     */
    trackedOrders?: shared.TrackedOrders;
}
