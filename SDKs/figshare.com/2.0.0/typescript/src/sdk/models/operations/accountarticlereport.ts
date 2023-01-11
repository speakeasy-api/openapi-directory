import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountArticleReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: number;
}


export class AccountArticleReportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AccountArticleReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountArticleReportQueryParams;

  @SpeakeasyMetadata()
  security: AccountArticleReportSecurity;
}


export class AccountArticleReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccountReport })
  accountReports?: shared.AccountReport[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
