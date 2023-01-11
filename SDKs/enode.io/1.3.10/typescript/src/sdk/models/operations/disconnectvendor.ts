import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DisconnectVendorVendorEnum {
    Tesla = "TESLA",
    Bmw = "BMW",
    Audi = "AUDI",
    Volkswagen = "VOLKSWAGEN",
    Hyundai = "HYUNDAI",
    Peugeot = "PEUGEOT",
    Nissan = "NISSAN"
}


export class DisconnectVendorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vendor" })
  vendor: DisconnectVendorVendorEnum;
}


export class DisconnectVendorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken: shared.SchemeUserAccessToken;
}


export class DisconnectVendorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisconnectVendorPathParams;

  @SpeakeasyMetadata()
  security: DisconnectVendorSecurity;
}


export class DisconnectVendorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
