import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FlatErrorResponse
/** 
 * An API Error response
**/
export class FlatErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=param" })
  param?: string;
}
