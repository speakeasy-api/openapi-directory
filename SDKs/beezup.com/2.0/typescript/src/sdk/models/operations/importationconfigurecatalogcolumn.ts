import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationConfigureCatalogColumnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationConfigureCatalogColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationConfigureCatalogColumnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfigureCatalogColumnCatalogRequest;
}


export class ImportationConfigureCatalogColumnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
