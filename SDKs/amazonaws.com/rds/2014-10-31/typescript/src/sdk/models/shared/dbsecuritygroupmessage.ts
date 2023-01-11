import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroups } from "./dbsecuritygroups";



// DbSecurityGroupMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action. 
**/
export class DbSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroups })
  dbSecurityGroups?: DbSecurityGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
