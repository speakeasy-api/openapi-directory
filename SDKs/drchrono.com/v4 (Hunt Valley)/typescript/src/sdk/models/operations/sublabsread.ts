import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SublabsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SublabsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class SublabsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SublabsReadPathParams;

  @SpeakeasyMetadata()
  security: SublabsReadSecurity;
}


export class SublabsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labVendorLocation?: shared.LabVendorLocation;

  @SpeakeasyMetadata()
  statusCode: number;
}
