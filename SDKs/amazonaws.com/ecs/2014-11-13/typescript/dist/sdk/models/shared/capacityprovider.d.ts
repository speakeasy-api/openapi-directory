import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupProvider } from "./autoscalinggroupprovider";
import { CapacityProviderStatusEnum } from "./capacityproviderstatusenum";
import { CapacityProviderUpdateStatusEnum } from "./capacityproviderupdatestatusenum";
import { Tag } from "./tag";
/**
 * The details for a capacity provider.
 */
export declare class CapacityProvider extends SpeakeasyBase {
    autoScalingGroupProvider?: AutoScalingGroupProvider;
    capacityProviderArn?: string;
    name?: string;
    status?: CapacityProviderStatusEnum;
    tags?: Tag[];
    updateStatus?: CapacityProviderUpdateStatusEnum;
    updateStatusReason?: string;
}
