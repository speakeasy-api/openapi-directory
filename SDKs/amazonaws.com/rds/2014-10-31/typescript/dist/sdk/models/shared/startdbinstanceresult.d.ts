import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstance } from "./dbinstance";
/**
 * Success
 */
export declare class StartDBInstanceResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon RDS DB instance.</p> <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>, <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>, <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>, <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>, <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
     */
    dbInstance?: DBInstance;
}
