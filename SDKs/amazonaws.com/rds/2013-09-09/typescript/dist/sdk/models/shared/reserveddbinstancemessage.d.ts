import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDBInstanceList } from "./reserveddbinstancelist";
/**
 * Success
 */
export declare class ReservedDBInstanceMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstances?: ReservedDBInstanceList[];
}
