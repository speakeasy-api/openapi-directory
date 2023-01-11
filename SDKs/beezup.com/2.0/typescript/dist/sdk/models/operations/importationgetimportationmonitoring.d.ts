import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetImportationMonitoringPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationGetImportationMonitoringRequest extends SpeakeasyBase {
    pathParams: ImportationGetImportationMonitoringPathParams;
}
export declare class ImportationGetImportationMonitoringResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importationMonitoring?: shared.ImportationMonitoring;
}
