import { SpeakeasyBase } from "../../../internal/utils";
import { ValidDBInstanceModificationsMessage } from "./validdbinstancemodificationsmessage";
/**
 * Success
 */
export declare class DescribeValidDBInstanceModificationsResult extends SpeakeasyBase {
    /**
     * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>.
     */
    validDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}
