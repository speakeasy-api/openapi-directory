import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetProductsReportPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationGetProductsReportRequest extends SpeakeasyBase {
    pathParams: ImportationGetProductsReportPathParams;
    request: shared.GetImportationProductsReportRequest;
}
export declare class ImportationGetProductsReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getImportationProductsReportResponse?: any;
}
