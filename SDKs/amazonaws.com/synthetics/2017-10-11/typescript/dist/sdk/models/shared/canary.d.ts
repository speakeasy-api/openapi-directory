import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactConfigOutput } from "./artifactconfigoutput";
import { CanaryCodeOutput } from "./canarycodeoutput";
import { CanaryRunConfigOutput } from "./canaryrunconfigoutput";
import { CanaryScheduleOutput } from "./canaryscheduleoutput";
import { CanaryStatus } from "./canarystatus";
import { CanaryTimeline } from "./canarytimeline";
import { VisualReferenceOutput } from "./visualreferenceoutput";
import { VpcConfigOutput } from "./vpcconfigoutput";
/**
 * This structure contains all information about one canary in your account.
 */
export declare class Canary extends SpeakeasyBase {
    artifactConfig?: ArtifactConfigOutput;
    artifactS3Location?: string;
    /**
     * This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
     */
    code?: CanaryCodeOutput;
    engineArn?: string;
    executionRoleArn?: string;
    failureRetentionPeriodInDays?: number;
    id?: string;
    name?: string;
    /**
     * A structure that contains information about a canary run.
     */
    runConfig?: CanaryRunConfigOutput;
    runtimeVersion?: string;
    schedule?: CanaryScheduleOutput;
    status?: CanaryStatus;
    successRetentionPeriodInDays?: number;
    tags?: Record<string, string>;
    timeline?: CanaryTimeline;
    visualReference?: VisualReferenceOutput;
    /**
     * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
     */
    vpcConfig?: VpcConfigOutput;
}
