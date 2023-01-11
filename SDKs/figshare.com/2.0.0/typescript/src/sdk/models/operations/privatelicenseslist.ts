import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateLicensesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateLicensesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PrivateLicensesListSecurity;
}


export class PrivateLicensesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.License })
  licenses?: shared.License[];

  @SpeakeasyMetadata()
  statusCode: number;
}
