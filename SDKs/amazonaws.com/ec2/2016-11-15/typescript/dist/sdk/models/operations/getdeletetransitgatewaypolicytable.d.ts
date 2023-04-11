import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteTransitGatewayPolicyTableActionEnum {
    DeleteTransitGatewayPolicyTable = "DeleteTransitGatewayPolicyTable"
}
export declare enum GETDeleteTransitGatewayPolicyTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteTransitGatewayPolicyTableRequest extends SpeakeasyBase {
    action: GETDeleteTransitGatewayPolicyTableActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The transit gateway policy table to delete.
     */
    transitGatewayPolicyTableId: string;
    version: GETDeleteTransitGatewayPolicyTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteTransitGatewayPolicyTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
