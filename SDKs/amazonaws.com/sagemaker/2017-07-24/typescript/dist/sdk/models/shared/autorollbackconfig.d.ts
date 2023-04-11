import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
/**
 * Automatic rollback configuration for handling endpoint deployment failures and recovery.
 */
export declare class AutoRollbackConfig extends SpeakeasyBase {
    alarms?: Alarm[];
}
