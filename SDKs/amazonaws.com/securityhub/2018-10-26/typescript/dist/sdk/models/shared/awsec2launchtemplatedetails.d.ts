import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataDetails } from "./awsec2launchtemplatedatadetails";
/**
 *  Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
 */
export declare class AwsEc2LaunchTemplateDetails extends SpeakeasyBase {
    defaultVersionNumber?: number;
    id?: string;
    latestVersionNumber?: number;
    launchTemplateData?: AwsEc2LaunchTemplateDataDetails;
    launchTemplateName?: string;
}
