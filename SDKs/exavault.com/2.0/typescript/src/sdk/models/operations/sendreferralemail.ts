import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendReferralEmailHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class SendReferralEmailSendReferralEmailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class SendReferralEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendReferralEmailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SendReferralEmailSendReferralEmailRequestBody;
}


export class SendReferralEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
