import { SpeakeasyBase } from "../../../internal/utils";
import { SpotProvisioningAllocationStrategyEnum } from "./spotprovisioningallocationstrategyenum";
import { SpotProvisioningTimeoutActionEnum } from "./spotprovisioningtimeoutactionenum";
/**
 * <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note> <note> <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022. </p> </note>
 */
export declare class SpotProvisioningSpecification extends SpeakeasyBase {
    allocationStrategy?: SpotProvisioningAllocationStrategyEnum;
    blockDurationMinutes?: number;
    timeoutAction: SpotProvisioningTimeoutActionEnum;
    timeoutDurationMinutes: number;
}
