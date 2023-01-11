import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListLogConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata({ elemType: shared.NamedLogConfiguration })
  namedLogConfigurations?: shared.NamedLogConfiguration[];

  @SpeakeasyMetadata()
  statusCode: number;
}
