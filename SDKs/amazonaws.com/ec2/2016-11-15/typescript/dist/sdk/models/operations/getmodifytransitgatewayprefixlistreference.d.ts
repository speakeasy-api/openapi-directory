import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyTransitGatewayPrefixListReferenceActionEnum {
    ModifyTransitGatewayPrefixListReference = "ModifyTransitGatewayPrefixListReference"
}
export declare enum GETModifyTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    action: GETModifyTransitGatewayPrefixListReferenceActionEnum;
    /**
     * Indicates whether to drop traffic that matches this route.
     */
    blackhole?: boolean;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the prefix list.
     */
    prefixListId: string;
    /**
     * The ID of the attachment to which traffic is routed.
     */
    transitGatewayAttachmentId?: string;
    /**
     * The ID of the transit gateway route table.
     */
    transitGatewayRouteTableId: string;
    version: GETModifyTransitGatewayPrefixListReferenceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
