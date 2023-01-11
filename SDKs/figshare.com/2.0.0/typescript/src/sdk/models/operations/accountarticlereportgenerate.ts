import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountArticleReportGenerateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AccountArticleReportGenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AccountArticleReportGenerateSecurity;
}


export class AccountArticleReportGenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountReport?: shared.AccountReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
