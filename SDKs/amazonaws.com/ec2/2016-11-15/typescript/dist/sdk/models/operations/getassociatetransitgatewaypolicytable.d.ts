import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateTransitGatewayPolicyTableActionEnum {
    AssociateTransitGatewayPolicyTable = "AssociateTransitGatewayPolicyTable"
}
export declare enum GETAssociateTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: GETAssociateTransitGatewayPolicyTableActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the transit gateway attachment to associate with the policy table.
     */
    transitGatewayAttachmentId: string;
    /**
     * The ID of the transit gateway policy table to associate with the transit gateway attachment.
     */
    transitGatewayPolicyTableId: string;
    version: GETAssociateTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
