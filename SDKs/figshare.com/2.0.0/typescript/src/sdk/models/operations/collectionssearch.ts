import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CollectionSearch;
}


export class CollectionsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Collection })
  collections?: shared.Collection[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
