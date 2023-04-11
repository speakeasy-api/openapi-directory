import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare class BaselineEbsBandwidthMbpsRequest extends SpeakeasyBase {
    max?: number;
    min?: number;
}
