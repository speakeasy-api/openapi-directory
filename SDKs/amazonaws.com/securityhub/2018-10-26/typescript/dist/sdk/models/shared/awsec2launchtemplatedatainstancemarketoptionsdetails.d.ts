import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails } from "./awsec2launchtemplatedatainstancemarketoptionsspotoptionsdetails";
/**
 *  Provides details about the market (purchasing) option for an Amazon EC2 instance.
 */
export declare class AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails extends SpeakeasyBase {
    marketType?: string;
    spotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
}
