import { SpeakeasyBase } from "../../../internal/utils";
import { RecoveryPoint } from "./recoverypoint";
/**
 * Success
 */
export declare class ListRecoveryPointsResponse extends SpeakeasyBase {
    nextToken?: string;
    recoveryPoints?: RecoveryPoint[];
}
