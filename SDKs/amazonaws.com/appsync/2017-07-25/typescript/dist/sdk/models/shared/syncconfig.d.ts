import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetectionTypeEnum } from "./conflictdetectiontypeenum";
import { ConflictHandlerTypeEnum } from "./conflicthandlertypeenum";
import { LambdaConflictHandlerConfig } from "./lambdaconflicthandlerconfig";
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
 */
export declare class SyncConfig extends SpeakeasyBase {
    conflictDetection?: ConflictDetectionTypeEnum;
    conflictHandler?: ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}
