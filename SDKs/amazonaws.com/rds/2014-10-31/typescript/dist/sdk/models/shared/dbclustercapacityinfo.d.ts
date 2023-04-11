import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class DBClusterCapacityInfo extends SpeakeasyBase {
    currentCapacity?: number;
    dbClusterIdentifier?: string;
    pendingCapacity?: number;
    secondsBeforeTimeout?: number;
    timeoutAction?: string;
}
