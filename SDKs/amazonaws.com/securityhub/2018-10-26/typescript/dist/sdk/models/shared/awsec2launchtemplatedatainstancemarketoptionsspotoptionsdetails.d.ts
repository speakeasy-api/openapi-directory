import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides details about the market (purchasing) options for Spot Instances.
 */
export declare class AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails extends SpeakeasyBase {
    blockDurationMinutes?: number;
    instanceInterruptionBehavior?: string;
    maxPrice?: string;
    spotInstanceType?: string;
    validUntil?: string;
}
