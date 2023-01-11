import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSubmissionsReviewsAsExcelPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class ExportSubmissionsReviewsAsExcelSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ExportSubmissionsReviewsAsExcelRequest extends SpeakeasyBase {
    pathParams: ExportSubmissionsReviewsAsExcelPathParams;
    security: ExportSubmissionsReviewsAsExcelSecurity;
}
export declare class ExportSubmissionsReviewsAsExcelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    exportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString?: Uint8Array;
}
