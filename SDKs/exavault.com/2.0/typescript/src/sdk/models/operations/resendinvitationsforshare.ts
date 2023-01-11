import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResendInvitationsForSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shareId" })
  shareId: number;
}


export class ResendInvitationsForShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class ResendInvitationsForShareResendInvitationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recipientId" })
  recipientId?: number;
}


export class ResendInvitationsForShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResendInvitationsForSharePathParams;

  @SpeakeasyMetadata()
  headers: ResendInvitationsForShareHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ResendInvitationsForShareResendInvitationsRequestBody;
}


export class ResendInvitationsForShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shareRecipientsResponse?: shared.ShareRecipientsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
