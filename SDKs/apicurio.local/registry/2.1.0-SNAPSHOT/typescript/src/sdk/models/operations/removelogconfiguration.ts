import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveLogConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logger" })
  logger: string;
}


export class RemoveLogConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveLogConfigurationPathParams;
}


export class RemoveLogConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  namedLogConfiguration?: shared.NamedLogConfiguration;

  @SpeakeasyMetadata()
  statusCode: number;
}
