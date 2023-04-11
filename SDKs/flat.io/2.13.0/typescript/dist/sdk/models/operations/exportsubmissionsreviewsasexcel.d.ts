import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportSubmissionsReviewsAsExcelSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ExportSubmissionsReviewsAsExcelRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class ExportSubmissionsReviewsAsExcelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of submissions
     */
    exportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString?: Uint8Array;
}
