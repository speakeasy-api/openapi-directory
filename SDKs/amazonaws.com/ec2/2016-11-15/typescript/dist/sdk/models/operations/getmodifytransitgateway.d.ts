import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyTransitGatewayActionEnum {
    ModifyTransitGateway = "ModifyTransitGateway"
}
/**
 * The transit gateway options.
 */
export declare class GETModifyTransitGatewayOptions extends SpeakeasyBase {
    addTransitGatewayCidrBlocks?: string[];
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: shared.AutoAcceptSharedAttachmentsValueEnum;
    defaultRouteTableAssociation?: shared.DefaultRouteTableAssociationValueEnum;
    defaultRouteTablePropagation?: shared.DefaultRouteTablePropagationValueEnum;
    dnsSupport?: shared.DnsSupportValueEnum;
    propagationDefaultRouteTableId?: string;
    removeTransitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: shared.VpnEcmpSupportValueEnum;
}
export declare enum GETModifyTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyTransitGatewayRequest extends SpeakeasyBase {
    action: GETModifyTransitGatewayActionEnum;
    /**
     * The description for the transit gateway.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The options to modify.
     */
    options?: GETModifyTransitGatewayOptions;
    /**
     * The ID of the transit gateway.
     */
    transitGatewayId: string;
    version: GETModifyTransitGatewayVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTransitGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
