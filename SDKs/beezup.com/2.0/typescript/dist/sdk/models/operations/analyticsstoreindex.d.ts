import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsStoreIndexPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class AnalyticsStoreIndexRequest extends SpeakeasyBase {
    pathParams: AnalyticsStoreIndexPathParams;
}
export declare class AnalyticsStoreIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    analyticsStoreIndex?: shared.AnalyticsStoreIndex;
}
