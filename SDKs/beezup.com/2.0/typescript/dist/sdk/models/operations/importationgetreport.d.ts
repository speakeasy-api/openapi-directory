import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetReportPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationGetReportRequest extends SpeakeasyBase {
    pathParams: ImportationGetReportPathParams;
}
export declare class ImportationGetReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getImportationReportResponse?: shared.GetImportationReportResponse;
}
