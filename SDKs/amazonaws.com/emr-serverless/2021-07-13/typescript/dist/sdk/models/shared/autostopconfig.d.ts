import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for an application to automatically stop after a certain amount of time being idle.
 */
export declare class AutoStopConfig extends SpeakeasyBase {
    enabled?: boolean;
    idleTimeoutMinutes?: number;
}
