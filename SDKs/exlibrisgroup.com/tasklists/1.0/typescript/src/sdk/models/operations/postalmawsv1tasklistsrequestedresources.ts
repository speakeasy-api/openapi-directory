import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlmawsV1TaskListsRequestedResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=circ_desk" })
  circDesk?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=library" })
  library?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=op" })
  op?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pickup_inst" })
  pickupInst?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printed" })
  printed?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reported" })
  reported?: string;
}


export class PostAlmawsV1TaskListsRequestedResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAlmawsV1TaskListsRequestedResourcesQueryParams;
}


export class PostAlmawsV1TaskListsRequestedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema?: shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema;
}
