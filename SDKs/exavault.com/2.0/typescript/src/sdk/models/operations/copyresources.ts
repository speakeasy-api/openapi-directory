import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CopyResourcesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class CopyResourcesCopyResourcesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentResource" })
  parentResource: string;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources: string[];
}


export class CopyResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CopyResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CopyResourcesCopyResourcesRequestBody;
}


export class CopyResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceCopyMove?: shared.ResourceCopyMove;

  @SpeakeasyMetadata()
  resourceMultiResponse?: shared.ResourceMultiResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
