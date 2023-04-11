import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The operating Regions for an IPAM. Operating Regions are Amazon Web Services Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the Amazon Web Services Regions you select as operating Regions.</p> <p>For more information about operating Regions, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export declare class DescribeIpamsResultIpamsOperatingRegions extends SpeakeasyBase {
    regionName?: string;
}
/**
 * The state of the IPAM.
 */
export declare enum DescribeIpamsResultIpamsStateEnum {
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
export declare class DescribeIpamsResultIpamsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.
 */
export declare class DescribeIpamsResultIpams extends SpeakeasyBase {
    defaultResourceDiscoveryAssociationId?: string;
    defaultResourceDiscoveryId?: string;
    description?: string;
    ipamArn?: string;
    ipamId?: string;
    ipamRegion?: string;
    operatingRegions?: DescribeIpamsResultIpamsOperatingRegions[];
    ownerId?: string;
    privateDefaultScopeId?: string;
    publicDefaultScopeId?: string;
    resourceDiscoveryAssociationCount?: number;
    scopeCount?: number;
    state?: DescribeIpamsResultIpamsStateEnum;
    tags?: DescribeIpamsResultIpamsTags[];
}
/**
 * Success
 */
export declare class DescribeIpamsResult extends SpeakeasyBase {
    ipams?: DescribeIpamsResultIpams[];
    nextToken?: string;
}
