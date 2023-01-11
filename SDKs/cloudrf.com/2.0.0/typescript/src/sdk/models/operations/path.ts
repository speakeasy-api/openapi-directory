import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PathRequestBody extends SpeakeasyBase {
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


export class PathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PathRequestBody;

  @SpeakeasyMetadata()
  security: PathSecurity;
}


export class PathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
