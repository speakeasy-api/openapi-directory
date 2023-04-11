import { SpeakeasyBase } from "../../../internal/utils";
import { OpenZFSCopyStrategyEnum } from "./openzfscopystrategyenum";
/**
 * The snapshot configuration to use when creating an OpenZFS volume from a snapshot.
 */
export declare class CreateOpenZFSOriginSnapshotConfiguration extends SpeakeasyBase {
    copyStrategy: OpenZFSCopyStrategyEnum;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    snapshotARN: string;
}
