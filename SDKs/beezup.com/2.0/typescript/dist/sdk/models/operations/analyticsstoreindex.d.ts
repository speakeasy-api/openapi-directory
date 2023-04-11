import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsStoreIndexRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class AnalyticsStoreIndexResponse extends SpeakeasyBase {
    /**
     * Store or resource not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Analytics API operation index for one store
     */
    analyticsStoreIndex?: shared.AnalyticsStoreIndex;
}
