import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The inventory data for installed Migration Evaluator collectors.
 */
export declare class CustomerMeCollectorInfo extends SpeakeasyBase {
    activeMeCollectors: number;
    denyListedMeCollectors: number;
    healthyMeCollectors: number;
    shutdownMeCollectors: number;
    totalMeCollectors: number;
    unhealthyMeCollectors: number;
    unknownMeCollectors: number;
}
