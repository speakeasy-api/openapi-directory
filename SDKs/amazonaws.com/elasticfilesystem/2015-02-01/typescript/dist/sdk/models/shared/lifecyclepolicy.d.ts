import { SpeakeasyBase } from "../../../internal/utils";
import { TransitionToIARulesEnum } from "./transitiontoiarulesenum";
import { TransitionToPrimaryStorageClassRulesEnum } from "./transitiontoprimarystorageclassrulesenum";
/**
 * <p>Describes a policy used by EFS lifecycle management and EFS Intelligent-Tiering that specifies when to transition files into and out of the file system's Infrequent Access (IA) storage class. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Intelligent‐Tiering and EFS Lifecycle Management</a>.</p> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. For more information, see the request examples in <a>PutLifecycleConfiguration</a>.</p> </note>
 */
export declare class LifecyclePolicy extends SpeakeasyBase {
    transitionToIA?: TransitionToIARulesEnum;
    transitionToPrimaryStorageClass?: TransitionToPrimaryStorageClassRulesEnum;
}
