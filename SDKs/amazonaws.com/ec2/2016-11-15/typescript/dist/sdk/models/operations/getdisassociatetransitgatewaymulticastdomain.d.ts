import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateTransitGatewayMulticastDomainActionEnum {
    DisassociateTransitGatewayMulticastDomain = "DisassociateTransitGatewayMulticastDomain"
}
export declare enum GETDisassociateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisassociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    action: GETDisassociateTransitGatewayMulticastDomainActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IDs of the subnets;
     */
    subnetIds: string[];
    /**
     * The ID of the attachment.
     */
    transitGatewayAttachmentId: string;
    /**
     * The ID of the transit gateway multicast domain.
     */
    transitGatewayMulticastDomainId: string;
    version: GETDisassociateTransitGatewayMulticastDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
