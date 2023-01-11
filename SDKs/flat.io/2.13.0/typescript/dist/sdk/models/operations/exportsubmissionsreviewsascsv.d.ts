import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSubmissionsReviewsAsCsvPathParams extends SpeakeasyBase {
    assignment: string;
    class: string;
}
export declare class ExportSubmissionsReviewsAsCsvSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ExportSubmissionsReviewsAsCsvRequest extends SpeakeasyBase {
    pathParams: ExportSubmissionsReviewsAsCsvPathParams;
    security: ExportSubmissionsReviewsAsCsvSecurity;
}
export declare class ExportSubmissionsReviewsAsCsvResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    exportSubmissionsReviewsAsCsv200TextCsvBinaryString?: Uint8Array;
}
