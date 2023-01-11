import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DefaultPayloadError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=error_detail" })
  errorDetail?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// DefaultPayload
/** 
 * default payload for object for all HTTP codes that are not covered individually
**/
export class DefaultPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DefaultPayloadError;
}
