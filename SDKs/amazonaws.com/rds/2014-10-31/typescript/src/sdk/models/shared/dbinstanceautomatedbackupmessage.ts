import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackupList } from "./dbinstanceautomatedbackuplist";



// DbInstanceAutomatedBackupMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action. 
**/
export class DbInstanceAutomatedBackupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstanceAutomatedBackupList })
  dbInstanceAutomatedBackups?: DbInstanceAutomatedBackupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
