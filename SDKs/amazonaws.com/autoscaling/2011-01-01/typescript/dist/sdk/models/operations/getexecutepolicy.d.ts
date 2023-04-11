import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETExecutePolicyActionEnum {
    ExecutePolicy = "ExecutePolicy"
}
export declare enum GETExecutePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETExecutePolicyRequest extends SpeakeasyBase {
    action: GETExecutePolicyActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: string;
    /**
     * <p>The breach threshold for the alarm.</p> <p>Required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
     */
    breachThreshold?: number;
    /**
     * <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy.</p> <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    honorCooldown?: boolean;
    /**
     * <p>The metric value to compare to <code>BreachThreshold</code>. This enables you to execute a policy of type <code>StepScaling</code> and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59.</p> <p>If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error.</p> <p>Required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
     */
    metricValue?: number;
    /**
     * The name or ARN of the policy.
     */
    policyName: string;
    version: GETExecutePolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETExecutePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
