import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveStoreAlertsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class SaveStoreAlertsRequest extends SpeakeasyBase {
    pathParams: SaveStoreAlertsPathParams;
    request: Record<string, shared.SaveStoreAlertRequest>;
}
export declare class SaveStoreAlertsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
