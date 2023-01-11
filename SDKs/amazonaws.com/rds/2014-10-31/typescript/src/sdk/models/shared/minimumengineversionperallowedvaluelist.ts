import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MinimumEngineVersionPerAllowedValueList
/** 
 * The minimum DB engine version required for each corresponding allowed value for an option setting.
**/
export class MinimumEngineVersionPerAllowedValueList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValue?: string;

  @SpeakeasyMetadata()
  minimumEngineVersion?: string;
}
