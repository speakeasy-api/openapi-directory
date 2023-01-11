import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreTrackedClicksPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreTrackedClicksQueryParams extends SpeakeasyBase {
    count?: number;
}
export declare class GetStoreTrackedClicksRequest extends SpeakeasyBase {
    pathParams: GetStoreTrackedClicksPathParams;
    queryParams: GetStoreTrackedClicksQueryParams;
}
export declare class GetStoreTrackedClicksResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    trackedClicks?: shared.TrackedClicks;
}
