import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportSubmissionsReviewsAsExcelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class ExportSubmissionsReviewsAsExcelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ExportSubmissionsReviewsAsExcelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportSubmissionsReviewsAsExcelPathParams;

  @SpeakeasyMetadata()
  security: ExportSubmissionsReviewsAsExcelSecurity;
}


export class ExportSubmissionsReviewsAsExcelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportSubmissionsReviewsAsExcel200ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetBinaryString?: Uint8Array;
}
