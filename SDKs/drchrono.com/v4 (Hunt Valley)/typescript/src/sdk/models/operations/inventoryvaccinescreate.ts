import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InventoryVaccinesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cvx_code" })
  cvxCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class InventoryVaccinesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class InventoryVaccinesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InventoryVaccinesCreateQueryParams;

  @SpeakeasyMetadata()
  security: InventoryVaccinesCreateSecurity;
}


export class InventoryVaccinesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryVaccine?: shared.InventoryVaccine;

  @SpeakeasyMetadata()
  statusCode: number;
}
