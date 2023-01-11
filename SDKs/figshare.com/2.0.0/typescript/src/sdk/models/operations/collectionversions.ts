import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class CollectionVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionVersionsPathParams;
}


export class CollectionVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CollectionVersions })
  collectionVersions?: shared.CollectionVersions[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
