import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes an instance reuse policy for a warm pool. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export declare class InstanceReusePolicy extends SpeakeasyBase {
    reuseOnScaleIn?: boolean;
}
