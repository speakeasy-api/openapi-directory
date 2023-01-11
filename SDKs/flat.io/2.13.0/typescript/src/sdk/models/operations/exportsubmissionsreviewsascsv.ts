import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportSubmissionsReviewsAsCsvPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class ExportSubmissionsReviewsAsCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ExportSubmissionsReviewsAsCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportSubmissionsReviewsAsCsvPathParams;

  @SpeakeasyMetadata()
  security: ExportSubmissionsReviewsAsCsvSecurity;
}


export class ExportSubmissionsReviewsAsCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  exportSubmissionsReviewsAsCsv200TextCsvBinaryString?: Uint8Array;
}
