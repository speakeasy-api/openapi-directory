import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2InstanceDetails } from "./awsec2instancedetails";
import { AwsEcrContainerImageDetails } from "./awsecrcontainerimagedetails";
import { AwsLambdaFunctionDetails } from "./awslambdafunctiondetails";
/**
 * Contains details about the resource involved in the finding.
 */
export declare class ResourceDetails extends SpeakeasyBase {
    awsEc2Instance?: AwsEc2InstanceDetails;
    awsEcrContainerImage?: AwsEcrContainerImageDetails;
    awsLambdaFunction?: AwsLambdaFunctionDetails;
}
