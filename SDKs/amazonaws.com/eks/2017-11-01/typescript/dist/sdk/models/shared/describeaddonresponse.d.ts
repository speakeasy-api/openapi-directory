import { SpeakeasyBase } from "../../../internal/utils";
import { Addon } from "./addon";
/**
 * Success
 */
export declare class DescribeAddonResponse extends SpeakeasyBase {
    /**
     * An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in the <i>Amazon EKS User Guide</i>.
     */
    addon?: Addon;
}
