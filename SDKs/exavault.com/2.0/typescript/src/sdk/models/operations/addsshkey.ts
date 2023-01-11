import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddSshKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class AddSshKeyAddSshKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;
}


export class AddSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddSshKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddSshKeyAddSshKeyRequestBody;
}


export class AddSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sshKeyResponse?: shared.SshKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
