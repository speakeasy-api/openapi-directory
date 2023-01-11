import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InventoryCategoriesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class InventoryCategoriesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class InventoryCategoriesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class InventoryCategoriesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InventoryCategoriesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: InventoryCategoriesReadQueryParams;

  @SpeakeasyMetadata()
  security: InventoryCategoriesReadSecurity;
}


export class InventoryCategoriesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryCategory?: shared.InventoryCategory;

  @SpeakeasyMetadata()
  statusCode: number;
}
