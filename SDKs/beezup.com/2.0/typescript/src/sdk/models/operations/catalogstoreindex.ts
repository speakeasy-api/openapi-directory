import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogStoreIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogStoreIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogStoreIndexPathParams;
}


export class CatalogStoreIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  catalogStoreIndex?: shared.CatalogStoreIndex;
}
