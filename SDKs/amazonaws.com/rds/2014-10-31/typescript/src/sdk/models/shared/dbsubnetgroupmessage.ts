import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroups } from "./dbsubnetgroups";



// DbSubnetGroupMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. 
**/
export class DbSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSubnetGroups })
  dbSubnetGroups?: DbSubnetGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
