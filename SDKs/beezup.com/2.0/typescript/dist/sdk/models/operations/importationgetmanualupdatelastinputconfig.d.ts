import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetManualUpdateLastInputConfigPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class ImportationGetManualUpdateLastInputConfigRequest extends SpeakeasyBase {
    pathParams: ImportationGetManualUpdateLastInputConfigPathParams;
}
export declare class ImportationGetManualUpdateLastInputConfigResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    lastManualImportInputConfiguration?: shared.LastManualImportInputConfiguration;
}
