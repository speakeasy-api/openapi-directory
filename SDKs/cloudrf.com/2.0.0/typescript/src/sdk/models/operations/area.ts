import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AreaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antenna" })
  antenna?: shared.Antenna;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: shared.Environment;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: shared.Model;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: shared.Output;

  @SpeakeasyMetadata({ data: "json, name=receiver" })
  receiver?: shared.Receiver;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "json, name=transmitter" })
  transmitter?: shared.Transmitter;
}


export class AreaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AreaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AreaRequestBody;

  @SpeakeasyMetadata()
  security: AreaSecurity;
}


export class AreaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
