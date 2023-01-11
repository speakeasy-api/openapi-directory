import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreTrackedExternalOrdersPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreTrackedExternalOrdersQueryParams extends SpeakeasyBase {
    count?: number;
}
export declare class GetStoreTrackedExternalOrdersRequest extends SpeakeasyBase {
    pathParams: GetStoreTrackedExternalOrdersPathParams;
    queryParams: GetStoreTrackedExternalOrdersQueryParams;
}
export declare class GetStoreTrackedExternalOrdersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    trackedExternalOrders?: shared.TrackedExternalOrders;
}
