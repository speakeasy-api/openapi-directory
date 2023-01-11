import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionVersionDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
  versionId: number;
}


export class CollectionVersionDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionVersionDetailsPathParams;
}


export class CollectionVersionDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionComplete?: shared.CollectionComplete;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
