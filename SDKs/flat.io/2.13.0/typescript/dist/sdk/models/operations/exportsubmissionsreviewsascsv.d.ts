import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportSubmissionsReviewsAsCsvSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ExportSubmissionsReviewsAsCsvRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class ExportSubmissionsReviewsAsCsvResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of submissions
     */
    exportSubmissionsReviewsAsCsv200TextCsvBinaryString?: Uint8Array;
}
