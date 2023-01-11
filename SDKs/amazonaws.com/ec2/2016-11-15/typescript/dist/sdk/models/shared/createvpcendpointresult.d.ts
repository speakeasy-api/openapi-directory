import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The last error that occurred for VPC endpoint.
**/
export declare class CreateVpcEndpointResultVpcEndpointLastError extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * Information about the endpoint.
**/
export declare class CreateVpcEndpointResultVpcEndpoint extends SpeakeasyBase {
    creationTimestamp?: Record<string, any>;
    dnsEntries?: Record<string, any>;
    groups?: Record<string, any>;
    lastError?: CreateVpcEndpointResultVpcEndpointLastError;
    networkInterfaceIds?: Record<string, any>;
    ownerId?: Record<string, any>;
    policyDocument?: Record<string, any>;
    privateDnsEnabled?: Record<string, any>;
    requesterManaged?: Record<string, any>;
    routeTableIds?: Record<string, any>;
    serviceName?: Record<string, any>;
    state?: Record<string, any>;
    subnetIds?: Record<string, any>;
    tags?: Record<string, any>;
    vpcEndpointId?: Record<string, any>;
    vpcEndpointType?: Record<string, any>;
    vpcId?: Record<string, any>;
}
/**
 * Contains the output of CreateVpcEndpoint.
**/
export declare class CreateVpcEndpointResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    vpcEndpoint?: CreateVpcEndpointResultVpcEndpoint;
}
