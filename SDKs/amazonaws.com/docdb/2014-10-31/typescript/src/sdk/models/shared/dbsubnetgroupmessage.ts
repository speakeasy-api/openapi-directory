import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroups } from "./dbsubnetgroups";



// DbSubnetGroupMessage
/** 
 * Represents the output of <a>DescribeDBSubnetGroups</a>.
**/
export class DbSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSubnetGroups })
  dbSubnetGroups?: DbSubnetGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
