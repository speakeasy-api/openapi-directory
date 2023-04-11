import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreTrackingStatusRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class GetStoreTrackingStatusResponse extends SpeakeasyBase {
    /**
     * Store or resource not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Store Tracking Status
     */
    storeTrackingStatus?: shared.StoreTrackingStatus;
}
