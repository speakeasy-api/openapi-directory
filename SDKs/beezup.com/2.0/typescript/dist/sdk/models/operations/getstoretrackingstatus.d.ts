import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreTrackingStatusPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreTrackingStatusRequest extends SpeakeasyBase {
    pathParams: GetStoreTrackingStatusPathParams;
}
export declare class GetStoreTrackingStatusResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    storeTrackingStatus?: shared.StoreTrackingStatus;
}
