import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidUpgradeTargetList
/** 
 * The version of the database engine that an instance can be upgraded to.
**/
export class ValidUpgradeTargetList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoUpgrade?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  isMajorVersionUpgrade?: boolean;
}
