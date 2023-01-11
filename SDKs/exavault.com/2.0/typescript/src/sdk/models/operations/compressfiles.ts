import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompressFilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class CompressFilesCompressFilesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveName" })
  archiveName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentResource" })
  parentResource?: string;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources: string[];
}


export class CompressFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CompressFilesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CompressFilesCompressFilesRequestBody;
}


export class CompressFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceResponse?: shared.ResourceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
