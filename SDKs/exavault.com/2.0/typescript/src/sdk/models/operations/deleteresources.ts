import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteResourcesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DeleteResourcesDeleteResourcesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources: string[];
}


export class DeleteResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DeleteResourcesDeleteResourcesRequestBody;
}


export class DeleteResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emptyResponse?: shared.EmptyResponse;

  @SpeakeasyMetadata()
  resourceMultiResponse?: shared.ResourceMultiResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
