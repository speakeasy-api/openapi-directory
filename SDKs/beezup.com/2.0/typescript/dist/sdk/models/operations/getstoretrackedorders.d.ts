import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreTrackedOrdersPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreTrackedOrdersQueryParams extends SpeakeasyBase {
    count?: number;
}
export declare class GetStoreTrackedOrdersRequest extends SpeakeasyBase {
    pathParams: GetStoreTrackedOrdersPathParams;
    queryParams: GetStoreTrackedOrdersQueryParams;
}
export declare class GetStoreTrackedOrdersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    trackedOrders?: shared.TrackedOrders;
}
