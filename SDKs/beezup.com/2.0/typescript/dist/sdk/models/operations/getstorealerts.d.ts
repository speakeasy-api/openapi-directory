import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreAlertsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreAlertsHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStoreAlertsRequest extends SpeakeasyBase {
    pathParams: GetStoreAlertsPathParams;
    headers: GetStoreAlertsHeaders;
}
export declare class GetStoreAlertsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    storeAlerts?: shared.StoreAlerts;
}
