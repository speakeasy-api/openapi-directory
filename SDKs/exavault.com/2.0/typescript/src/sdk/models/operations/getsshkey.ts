import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSshKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSshKeyPathParams;

  @SpeakeasyMetadata()
  headers: GetSshKeyHeaders;
}


export class GetSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sshKeyResponse?: shared.SshKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
