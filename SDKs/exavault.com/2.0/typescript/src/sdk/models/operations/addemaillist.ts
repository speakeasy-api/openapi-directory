import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddEmailListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class AddEmailListAddEmailListRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class AddEmailListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddEmailListHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddEmailListAddEmailListRequestBody;
}


export class AddEmailListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailListResponse?: shared.EmailListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
