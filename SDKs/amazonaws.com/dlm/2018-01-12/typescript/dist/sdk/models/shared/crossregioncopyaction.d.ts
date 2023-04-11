import { SpeakeasyBase } from "../../../internal/utils";
import { CrossRegionCopyRetainRule } from "./crossregioncopyretainrule";
import { EncryptionConfiguration } from "./encryptionconfiguration";
/**
 * <p> <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p> <note> <p>To specify a cross-Region copy rule for snapshot and AMI policies, use <a>CrossRegionCopyRule</a>.</p> </note>
 */
export declare class CrossRegionCopyAction extends SpeakeasyBase {
    encryptionConfiguration: EncryptionConfiguration;
    /**
     * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.
     */
    retainRule?: CrossRegionCopyRetainRule;
    target: string;
}
