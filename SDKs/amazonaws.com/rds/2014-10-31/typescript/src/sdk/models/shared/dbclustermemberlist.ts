import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterMemberList
/** 
 * Contains information about an instance that is part of a DB cluster.
**/
export class DbClusterMemberList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroupStatus?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  isClusterWriter?: boolean;

  @SpeakeasyMetadata()
  promotionTier?: number;
}
