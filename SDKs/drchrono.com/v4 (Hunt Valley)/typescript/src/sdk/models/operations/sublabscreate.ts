import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SublabsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class SublabsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SublabsCreateSecurity;
}


export class SublabsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labVendorLocation?: shared.LabVendorLocation;

  @SpeakeasyMetadata()
  statusCode: number;
}
