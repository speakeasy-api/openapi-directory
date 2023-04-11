import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMountTargetRequestBody extends SpeakeasyBase {
    /**
     * The ID of the file system for which to create the mount target.
     */
    fileSystemId: string;
    /**
     * Valid IPv4 address within the address range of the specified subnet.
     */
    ipAddress?: string;
    /**
     * Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.
     */
    securityGroups?: string[];
    /**
     * The ID of the subnet to add the mount target in. For file systems that use One Zone storage classes, use the subnet that is associated with the file system's Availability Zone.
     */
    subnetId: string;
}
export declare class CreateMountTargetRequest extends SpeakeasyBase {
    requestBody: CreateMountTargetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMountTargetResponse extends SpeakeasyBase {
    /**
     * AvailabilityZonesMismatch
     */
    availabilityZonesMismatch?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * IncorrectFileSystemLifeCycleState
     */
    incorrectFileSystemLifeCycleState?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * IpAddressInUse
     */
    ipAddressInUse?: any;
    /**
     * MountTargetConflict
     */
    mountTargetConflict?: any;
    /**
     * Success
     */
    mountTargetDescription?: shared.MountTargetDescription;
    /**
     * NetworkInterfaceLimitExceeded
     */
    networkInterfaceLimitExceeded?: any;
    /**
     * NoFreeAddressesInSubnet
     */
    noFreeAddressesInSubnet?: any;
    /**
     * SecurityGroupLimitExceeded
     */
    securityGroupLimitExceeded?: any;
    /**
     * SecurityGroupNotFound
     */
    securityGroupNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SubnetNotFound
     */
    subnetNotFound?: any;
    /**
     * UnsupportedAvailabilityZone
     */
    unsupportedAvailabilityZone?: any;
}
