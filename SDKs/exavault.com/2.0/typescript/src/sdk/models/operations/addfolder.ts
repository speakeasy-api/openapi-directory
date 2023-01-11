import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddFolderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class AddFolderAddFolderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentResource" })
  parentResource?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


export class AddFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddFolderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddFolderAddFolderRequestBody;
}


export class AddFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceResponse?: shared.ResourceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
