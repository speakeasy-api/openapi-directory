import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLogConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logger" })
  logger: string;
}


export class GetLogConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLogConfigurationPathParams;
}


export class GetLogConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  namedLogConfiguration?: shared.NamedLogConfiguration;

  @SpeakeasyMetadata()
  statusCode: number;
}
