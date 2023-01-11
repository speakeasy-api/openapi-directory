import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InventoryVaccinesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class InventoryVaccinesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cvx_code" })
  cvxCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class InventoryVaccinesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class InventoryVaccinesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InventoryVaccinesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: InventoryVaccinesReadQueryParams;

  @SpeakeasyMetadata()
  security: InventoryVaccinesReadSecurity;
}


export class InventoryVaccinesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryVaccine?: shared.InventoryVaccine;

  @SpeakeasyMetadata()
  statusCode: number;
}
