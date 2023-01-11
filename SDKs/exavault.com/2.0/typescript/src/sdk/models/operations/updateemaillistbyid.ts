import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEmailListByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateEmailListByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class UpdateEmailListByIdUpdateEmailListRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateEmailListByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEmailListByIdPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEmailListByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateEmailListByIdUpdateEmailListRequestBody;
}


export class UpdateEmailListByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailListResponse?: shared.EmailListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
