import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MoveResourcesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class MoveResourcesMoveResourcesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentResource" })
  parentResource: string;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources: string[];
}


export class MoveResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: MoveResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MoveResourcesMoveResourcesRequestBody;
}


export class MoveResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceCopyMove?: shared.ResourceCopyMove;

  @SpeakeasyMetadata()
  resourceMultiResponse?: shared.ResourceMultiResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
