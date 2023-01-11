import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSshKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DeleteSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSshKeyPathParams;

  @SpeakeasyMetadata()
  headers: DeleteSshKeyHeaders;
}


export class DeleteSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
