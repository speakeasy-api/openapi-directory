import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateResourceByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateResourceByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class UpdateResourceByIdUpdateResourceByIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateResourceByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateResourceByIdPathParams;

  @SpeakeasyMetadata()
  headers: UpdateResourceByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateResourceByIdUpdateResourceByIdRequestBody;
}


export class UpdateResourceByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceResponse?: shared.ResourceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
