import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Specifies the CPU options for an Amazon EC2 instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimize CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
 */
export declare class AwsEc2LaunchTemplateDataCpuOptionsDetails extends SpeakeasyBase {
    coreCount?: number;
    threadsPerCore?: number;
}
