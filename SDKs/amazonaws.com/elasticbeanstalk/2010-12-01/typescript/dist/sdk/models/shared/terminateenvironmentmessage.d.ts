import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to terminate an environment.
 */
export declare class TerminateEnvironmentMessage extends SpeakeasyBase {
    environmentId?: string;
    environmentName?: string;
    forceTerminate?: boolean;
    terminateResources?: boolean;
}
