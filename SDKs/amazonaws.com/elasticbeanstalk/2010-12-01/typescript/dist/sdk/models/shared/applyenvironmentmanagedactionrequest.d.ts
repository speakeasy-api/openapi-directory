import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to execute a scheduled managed action immediately.
 */
export declare class ApplyEnvironmentManagedActionRequest extends SpeakeasyBase {
    actionId: string;
    environmentId?: string;
    environmentName?: string;
}
