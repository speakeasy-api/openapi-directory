import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceAutomatedBackupList } from "./dbinstanceautomatedbackuplist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
 */
export declare class DBInstanceAutomatedBackupMessage extends SpeakeasyBase {
    dbInstanceAutomatedBackups?: DBInstanceAutomatedBackupList[];
    marker?: string;
}
