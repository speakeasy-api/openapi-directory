import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FieldPatterns
/** 
 * A complex data type that includes the field patterns to match for field-level encryption.
**/
export class FieldPatterns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: Record<string, any>[];

  @SpeakeasyMetadata()
  quantity: number;
}
