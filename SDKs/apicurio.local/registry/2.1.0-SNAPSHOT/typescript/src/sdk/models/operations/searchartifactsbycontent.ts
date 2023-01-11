import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchArtifactsByContentOrderEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum SearchArtifactsByContentOrderbyEnum {
    Name = "name",
    CreatedOn = "createdOn"
}


export class SearchArtifactsByContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artifactType" })
  artifactType?: shared.ArtifactTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canonical" })
  canonical?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: SearchArtifactsByContentOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderby" })
  orderby?: SearchArtifactsByContentOrderbyEnum;
}


export class SearchArtifactsByContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchArtifactsByContentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class SearchArtifactsByContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactSearchResults?: shared.ArtifactSearchResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
