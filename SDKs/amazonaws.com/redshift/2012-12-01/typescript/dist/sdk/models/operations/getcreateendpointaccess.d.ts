import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateEndpointAccessActionEnum {
    CreateEndpointAccess = "CreateEndpointAccess"
}
export declare enum GETCreateEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETCreateEndpointAccessRequest extends SpeakeasyBase {
    action: GETCreateEndpointAccessActionEnum;
    /**
     * The cluster identifier of the cluster to access.
     */
    clusterIdentifier?: string;
    /**
     * <p>The Redshift-managed VPC endpoint name.</p> <p>An endpoint name must contain 1-30 characters. Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter. The name can't contain two consecutive hyphens or end with a hyphen.</p>
     */
    endpointName: string;
    /**
     * The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.
     */
    resourceOwner?: string;
    /**
     * The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.
     */
    subnetGroupName: string;
    version: GETCreateEndpointAccessVersionEnum;
    /**
     * The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
     */
    vpcSecurityGroupIds?: string[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
