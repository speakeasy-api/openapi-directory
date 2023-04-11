import { SpeakeasyBase } from "../../../internal/utils";
import { TaintEffectEnum } from "./tainteffectenum";
/**
 * A property that allows a node to repel a set of pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.
 */
export declare class Taint extends SpeakeasyBase {
    effect?: TaintEffectEnum;
    key?: string;
    value?: string;
}
