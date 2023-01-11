import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionGroupOptionVersionsList
/** 
 * The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
**/
export class OptionGroupOptionVersionsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  version?: string;
}
