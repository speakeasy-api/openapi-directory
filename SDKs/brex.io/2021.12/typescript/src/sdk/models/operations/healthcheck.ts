import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HealthCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class HealthCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: HealthCheckSecurity;
}


export class HealthCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  healthCheck200ApplicationJSONAnies?: any[];

  @SpeakeasyMetadata()
  healthCheckDefaultApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
