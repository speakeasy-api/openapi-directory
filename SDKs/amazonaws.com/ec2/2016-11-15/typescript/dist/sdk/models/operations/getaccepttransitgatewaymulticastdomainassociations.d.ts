import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum {
    AcceptTransitGatewayMulticastDomainAssociations = "AcceptTransitGatewayMulticastDomainAssociations"
}
export declare enum GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAcceptTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    action: GETAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IDs of the subnets to associate with the transit gateway multicast domain.
     */
    subnetIds?: string[];
    /**
     * The ID of the transit gateway attachment.
     */
    transitGatewayAttachmentId?: string;
    /**
     * The ID of the transit gateway multicast domain.
     */
    transitGatewayMulticastDomainId?: string;
    version: GETAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAcceptTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
