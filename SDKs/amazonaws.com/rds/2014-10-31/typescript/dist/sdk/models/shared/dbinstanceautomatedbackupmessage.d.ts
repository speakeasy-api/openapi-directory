import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackupList } from "./dbinstanceautomatedbackuplist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
**/
export declare class DbInstanceAutomatedBackupMessage extends SpeakeasyBase {
    dbInstanceAutomatedBackups?: DbInstanceAutomatedBackupList[];
    marker?: string;
}
