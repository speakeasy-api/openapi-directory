import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { StorageVirtualMachineLifecycleEnum } from "./storagevirtualmachinelifecycleenum";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { StorageVirtualMachineSubtypeEnum } from "./storagevirtualmachinesubtypeenum";
import { SvmActiveDirectoryConfiguration } from "./svmactivedirectoryconfiguration";
import { SvmEndpoints } from "./svmendpoints";
import { Tag } from "./tag";
/**
 * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.
 */
export declare class StorageVirtualMachine extends SpeakeasyBase {
    activeDirectoryConfiguration?: SvmActiveDirectoryConfiguration;
    /**
     * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    creationTime?: Date;
    endpoints?: SvmEndpoints;
    /**
     * The globally unique ID of the file system, assigned by Amazon FSx.
     */
    fileSystemId?: string;
    lifecycle?: StorageVirtualMachineLifecycleEnum;
    lifecycleTransitionReason?: LifecycleTransitionReason;
    name?: string;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    resourceARN?: string;
    rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;
    storageVirtualMachineId?: string;
    subtype?: StorageVirtualMachineSubtypeEnum;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    tags?: Tag[];
    uuid?: string;
}
