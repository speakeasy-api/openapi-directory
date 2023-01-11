import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImplantableDevicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ImplantableDevicesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mu_date" })
  muDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mu_date_range" })
  muDateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class ImplantableDevicesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ImplantableDevicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImplantableDevicesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ImplantableDevicesReadQueryParams;

  @SpeakeasyMetadata()
  security: ImplantableDevicesReadSecurity;
}


export class ImplantableDevicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  implantableDevice?: shared.ImplantableDevice;

  @SpeakeasyMetadata()
  statusCode: number;
}
