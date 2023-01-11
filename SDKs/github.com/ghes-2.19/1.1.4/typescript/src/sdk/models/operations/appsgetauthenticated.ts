import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppsGetAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  integration?: Record<string, any>;
}
