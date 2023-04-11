import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeAction } from "./administrativeaction";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { OntapVolumeConfiguration } from "./ontapvolumeconfiguration";
import { OpenZFSVolumeConfiguration } from "./openzfsvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
 */
export declare class Volume extends SpeakeasyBase {
    administrativeActions?: AdministrativeAction[];
    /**
     * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    creationTime?: Date;
    /**
     * The globally unique ID of the file system, assigned by Amazon FSx.
     */
    fileSystemId?: string;
    lifecycle?: VolumeLifecycleEnum;
    lifecycleTransitionReason?: LifecycleTransitionReason;
    name?: string;
    /**
     * The configuration of an Amazon FSx for NetApp ONTAP volume.
     */
    ontapConfiguration?: OntapVolumeConfiguration;
    openZFSConfiguration?: OpenZFSVolumeConfiguration;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    resourceARN?: string;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
    volumeId?: string;
    volumeType?: VolumeTypeEnum;
}
