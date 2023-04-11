import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The resource discovery status.</p> <ul> <li> <p> <code>active</code> - Connection or permissions required to read the results of the resource discovery are intact.</p> </li> <li> <p> <code>not-found</code> - Connection or permissions required to read the results of the resource discovery are broken. This may happen if the owner of the resource discovery stopped sharing it or deleted the resource discovery. Verify the resource discovery still exists and the Amazon Web Services RAM resource share is still intact.</p> </li> </ul>
 */
export declare enum AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociationResourceDiscoveryStatusEnum {
    Active = "active",
    NotFound = "not-found"
}
/**
 * <p>The lifecycle state of the association when you associate or disassociate a resource discovery.</p> <ul> <li> <p> <code>associate-in-progress</code> - Resource discovery is being associated.</p> </li> <li> <p> <code>associate-complete</code> - Resource discovery association is complete.</p> </li> <li> <p> <code>associate-failed</code> - Resource discovery association has failed.</p> </li> <li> <p> <code>disassociate-in-progress</code> - Resource discovery is being disassociated.</p> </li> <li> <p> <code>disassociate-complete</code> - Resource discovery disassociation is complete.</p> </li> <li> <p> <code>disassociate-failed </code> - Resource discovery disassociation has failed.</p> </li> <li> <p> <code>isolate-in-progress</code> - Amazon Web Services account that created the resource discovery association has been removed and the resource discovery associatation is being isolated.</p> </li> <li> <p> <code>isolate-complete</code> - Resource discovery isolation is complete..</p> </li> <li> <p> <code>restore-in-progress</code> - Resource discovery is being restored.</p> </li> </ul>
 */
export declare enum AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociationStateEnum {
    AssociateInProgress = "associate-in-progress",
    AssociateComplete = "associate-complete",
    AssociateFailed = "associate-failed",
    DisassociateInProgress = "disassociate-in-progress",
    DisassociateComplete = "disassociate-complete",
    DisassociateFailed = "disassociate-failed",
    IsolateInProgress = "isolate-in-progress",
    IsolateComplete = "isolate-complete",
    RestoreInProgress = "restore-in-progress"
}
/**
 * Describes a tag.
 */
export declare class AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * A resource discovery association. An associated resource discovery is a resource discovery that has been associated with an IPAM.
 */
export declare class AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociation extends SpeakeasyBase {
    ipamArn?: string;
    ipamId?: string;
    ipamRegion?: string;
    ipamResourceDiscoveryAssociationArn?: string;
    ipamResourceDiscoveryAssociationId?: string;
    ipamResourceDiscoveryId?: string;
    isDefault?: boolean;
    ownerId?: string;
    resourceDiscoveryStatus?: AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociationResourceDiscoveryStatusEnum;
    state?: AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociationStateEnum;
    tags?: AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociationTags[];
}
/**
 * Success
 */
export declare class AssociateIpamResourceDiscoveryResult extends SpeakeasyBase {
    ipamResourceDiscoveryAssociation?: AssociateIpamResourceDiscoveryResultIpamResourceDiscoveryAssociation;
}
