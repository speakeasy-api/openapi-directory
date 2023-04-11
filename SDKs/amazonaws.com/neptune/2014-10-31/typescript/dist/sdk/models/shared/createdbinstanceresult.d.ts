import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstance } from "./dbinstance";
/**
 * Success
 */
export declare class CreateDBInstanceResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
     */
    dbInstance?: DBInstance;
}
