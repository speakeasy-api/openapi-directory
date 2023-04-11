import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficRoutingConfig } from "./trafficroutingconfig";
/**
 * Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
 */
export declare class BlueGreenUpdatePolicy extends SpeakeasyBase {
    maximumExecutionTimeoutInSeconds?: number;
    terminationWaitInSeconds?: number;
    trafficRoutingConfiguration: TrafficRoutingConfig;
}
