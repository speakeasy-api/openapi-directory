import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidUpgradeTargetList
/** 
 * The version of the database engine that a DB instance can be upgraded to.
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
