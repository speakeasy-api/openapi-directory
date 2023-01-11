import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
**/
export declare class CreateNetworkInterfaceResultNetworkInterfaceAssociation extends SpeakeasyBase {
    allocationId?: Record<string, any>;
    associationId?: Record<string, any>;
    carrierIp?: Record<string, any>;
    customerOwnedIp?: Record<string, any>;
    ipOwnerId?: Record<string, any>;
    publicDnsName?: Record<string, any>;
    publicIp?: Record<string, any>;
}
/**
 * The network interface attachment.
**/
export declare class CreateNetworkInterfaceResultNetworkInterfaceAttachment extends SpeakeasyBase {
    attachTime?: Record<string, any>;
    attachmentId?: Record<string, any>;
    deleteOnTermination?: Record<string, any>;
    deviceIndex?: Record<string, any>;
    instanceId?: Record<string, any>;
    instanceOwnerId?: Record<string, any>;
    networkCardIndex?: Record<string, any>;
    status?: Record<string, any>;
}
/**
 * Information about the network interface.
**/
export declare class CreateNetworkInterfaceResultNetworkInterface extends SpeakeasyBase {
    association?: CreateNetworkInterfaceResultNetworkInterfaceAssociation;
    attachment?: CreateNetworkInterfaceResultNetworkInterfaceAttachment;
    availabilityZone?: Record<string, any>;
    description?: Record<string, any>;
    groups?: Record<string, any>;
    interfaceType?: Record<string, any>;
    ipv4Prefixes?: Record<string, any>;
    ipv6Addresses?: Record<string, any>;
    ipv6Prefixes?: Record<string, any>;
    macAddress?: Record<string, any>;
    networkInterfaceId?: Record<string, any>;
    outpostArn?: Record<string, any>;
    ownerId?: Record<string, any>;
    privateDnsName?: Record<string, any>;
    privateIpAddress?: Record<string, any>;
    privateIpAddresses?: Record<string, any>;
    requesterId?: Record<string, any>;
    requesterManaged?: Record<string, any>;
    sourceDestCheck?: Record<string, any>;
    status?: Record<string, any>;
    subnetId?: Record<string, any>;
    tagSet?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * Contains the output of CreateNetworkInterface.
**/
export declare class CreateNetworkInterfaceResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    networkInterface?: CreateNetworkInterfaceResultNetworkInterface;
}
