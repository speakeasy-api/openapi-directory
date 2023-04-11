import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateTransitGatewayPolicyTableActionEnum {
    DisassociateTransitGatewayPolicyTable = "DisassociateTransitGatewayPolicyTable"
}
export declare enum GETDisassociateTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisassociateTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: GETDisassociateTransitGatewayPolicyTableActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the transit gateway attachment to disassociate from the policy table.
     */
    transitGatewayAttachmentId: string;
    /**
     * The ID of the disassociated policy table.
     */
    transitGatewayPolicyTableId: string;
    version: GETDisassociateTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
