import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListArtifactsInGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ListArtifactsInGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderby" })
  orderby?: shared.SortByEnum;
}


export class ListArtifactsInGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListArtifactsInGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: ListArtifactsInGroupQueryParams;
}


export class ListArtifactsInGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactSearchResults?: shared.ArtifactSearchResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
