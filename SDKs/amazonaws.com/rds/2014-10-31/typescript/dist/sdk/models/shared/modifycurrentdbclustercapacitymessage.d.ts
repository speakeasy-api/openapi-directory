import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyCurrentDBClusterCapacityMessage extends SpeakeasyBase {
    capacity?: number;
    dbClusterIdentifier: string;
    secondsBeforeTimeout?: number;
    timeoutAction?: string;
}
