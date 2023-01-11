import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class CollectionDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionDetailsPathParams;
}


export class CollectionDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionComplete?: shared.CollectionComplete;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
