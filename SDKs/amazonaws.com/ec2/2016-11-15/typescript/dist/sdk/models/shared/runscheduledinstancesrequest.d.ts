import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstancesLaunchSpecification } from "./scheduledinstanceslaunchspecification";
/**
 * Contains the parameters for RunScheduledInstances.
 */
export declare class RunScheduledInstancesRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    instanceCount?: number;
    launchSpecification: ScheduledInstancesLaunchSpecification;
    scheduledInstanceId: string;
}
