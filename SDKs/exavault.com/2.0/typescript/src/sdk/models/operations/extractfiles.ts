import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtractFilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class ExtractFilesExtractFilesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentResource" })
  parentResource: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;
}


export class ExtractFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExtractFilesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ExtractFilesExtractFilesRequestBody;
}


export class ExtractFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceCollectionResponse?: shared.ResourceCollectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
