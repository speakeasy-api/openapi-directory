import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken: shared.SchemeUserAccessToken;
}


export class GetMe200ApplicationJsonLinkedVendors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isValid" })
  isValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum;
}


export class GetMe200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedVendors", elemType: GetMe200ApplicationJsonLinkedVendors })
  linkedVendors?: GetMe200ApplicationJsonLinkedVendors[];
}


export class GetMeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMeSecurity;
}


export class GetMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMe200ApplicationJSONObject?: GetMe200ApplicationJson;
}
