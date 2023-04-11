import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p> <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export declare class ModifyIpamResourceDiscoveryResultIpamResourceDiscoveryOperatingRegions extends SpeakeasyBase {
    regionName?: string;
}
/**
 * <p>The lifecycle state of the resource discovery.</p> <ul> <li> <p> <code>create-in-progress</code> - Resource discovery is being created.</p> </li> <li> <p> <code>create-complete</code> - Resource discovery creation is complete.</p> </li> <li> <p> <code>create-failed</code> - Resource discovery creation has failed.</p> </li> <li> <p> <code>modify-in-progress</code> - Resource discovery is being modified.</p> </li> <li> <p> <code>modify-complete</code> - Resource discovery modification is complete.</p> </li> <li> <p> <code>modify-failed</code> - Resource discovery modification has failed.</p> </li> <li> <p> <code>delete-in-progress</code> - Resource discovery is being deleted.</p> </li> <li> <p> <code>delete-complete</code> - Resource discovery deletion is complete.</p> </li> <li> <p> <code>delete-failed</code> - Resource discovery deletion has failed.</p> </li> <li> <p> <code>isolate-in-progress</code> - Amazon Web Services account that created the resource discovery has been removed and the resource discovery is being isolated.</p> </li> <li> <p> <code>isolate-complete</code> - Resource discovery isolation is complete.</p> </li> <li> <p> <code>restore-in-progress</code> - Amazon Web Services account that created the resource discovery and was isolated has been restored.</p> </li> </ul>
 */
export declare enum ModifyIpamResourceDiscoveryResultIpamResourceDiscoveryStateEnum {
    CreateInProgress = "create-in-progress",
    CreateComplete = "create-complete",
    CreateFailed = "create-failed",
    ModifyInProgress = "modify-in-progress",
    ModifyComplete = "modify-complete",
    ModifyFailed = "modify-failed",
    DeleteInProgress = "delete-in-progress",
    DeleteComplete = "delete-complete",
    DeleteFailed = "delete-failed",
    IsolateInProgress = "isolate-in-progress",
    IsolateComplete = "isolate-complete",
    RestoreInProgress = "restore-in-progress"
}
/**
 * Describes a tag.
 */
export declare class ModifyIpamResourceDiscoveryResultIpamResourceDiscoveryTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * A resource discovery.
 */
export declare class ModifyIpamResourceDiscoveryResultIpamResourceDiscovery extends SpeakeasyBase {
    description?: string;
    ipamResourceDiscoveryArn?: string;
    ipamResourceDiscoveryId?: string;
    ipamResourceDiscoveryRegion?: string;
    isDefault?: boolean;
    operatingRegions?: ModifyIpamResourceDiscoveryResultIpamResourceDiscoveryOperatingRegions[];
    ownerId?: string;
    state?: ModifyIpamResourceDiscoveryResultIpamResourceDiscoveryStateEnum;
    tags?: ModifyIpamResourceDiscoveryResultIpamResourceDiscoveryTags[];
}
/**
 * Success
 */
export declare class ModifyIpamResourceDiscoveryResult extends SpeakeasyBase {
    ipamResourceDiscovery?: ModifyIpamResourceDiscoveryResultIpamResourceDiscovery;
}
