import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the Amazon EC2 instances that Amazon Web Services recommends that you purchase.
 */
export declare class Ec2InstanceDetails extends SpeakeasyBase {
    availabilityZone?: string;
    currentGeneration?: boolean;
    family?: string;
    instanceType?: string;
    platform?: string;
    region?: string;
    sizeFlexEligible?: boolean;
    tenancy?: string;
}
