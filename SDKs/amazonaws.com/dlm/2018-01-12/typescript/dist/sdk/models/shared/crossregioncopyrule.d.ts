import { SpeakeasyBase } from "../../../internal/utils";
import { CrossRegionCopyDeprecateRule } from "./crossregioncopydeprecaterule";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";
/**
 * <p> <b>[Snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for snapshot and AMI policies.</p> <note> <p>To specify a cross-Region copy action for event-based polices, use <a>CrossRegionCopyAction</a>.</p> </note>
 */
export declare class CrossRegionCopyRule extends SpeakeasyBase {
    cmkArn?: string;
    copyTags?: boolean;
    deprecateRule?: CrossRegionCopyDeprecateRule;
    encrypted: boolean;
    retainRule?: CrossRegionCopyRetainRule;
    target?: string;
    targetRegion?: string;
}
