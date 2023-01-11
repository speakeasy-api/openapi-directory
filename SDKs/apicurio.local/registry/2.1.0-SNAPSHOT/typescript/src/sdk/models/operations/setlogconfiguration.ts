import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetLogConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logger" })
  logger: string;
}


export class SetLogConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetLogConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LogConfiguration;
}


export class SetLogConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  namedLogConfiguration?: shared.NamedLogConfiguration;

  @SpeakeasyMetadata()
  statusCode: number;
}
