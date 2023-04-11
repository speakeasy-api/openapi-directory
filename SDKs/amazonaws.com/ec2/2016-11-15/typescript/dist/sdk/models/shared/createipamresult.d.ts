import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p> <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export declare class CreateIpamResultIpamOperatingRegions extends SpeakeasyBase {
    regionName?: string;
}
/**
 * The state of the IPAM.
 */
export declare enum CreateIpamResultIpamStateEnum {
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
export declare class CreateIpamResultIpamTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the IPAM created.
 */
export declare class CreateIpamResultIpam extends SpeakeasyBase {
    defaultResourceDiscoveryAssociationId?: string;
    defaultResourceDiscoveryId?: string;
    description?: string;
    ipamArn?: string;
    ipamId?: string;
    ipamRegion?: string;
    operatingRegions?: CreateIpamResultIpamOperatingRegions[];
    ownerId?: string;
    privateDefaultScopeId?: string;
    publicDefaultScopeId?: string;
    resourceDiscoveryAssociationCount?: number;
    scopeCount?: number;
    state?: CreateIpamResultIpamStateEnum;
    tags?: CreateIpamResultIpamTags[];
}
/**
 * Success
 */
export declare class CreateIpamResult extends SpeakeasyBase {
    ipam?: CreateIpamResultIpam;
}
