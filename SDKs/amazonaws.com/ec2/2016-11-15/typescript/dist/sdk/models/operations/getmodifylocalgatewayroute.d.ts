import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyLocalGatewayRouteActionEnum {
    ModifyLocalGatewayRoute = "ModifyLocalGatewayRoute"
}
export declare enum GETModifyLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyLocalGatewayRouteRequest extends SpeakeasyBase {
    action: GETModifyLocalGatewayRouteActionEnum;
    /**
     * The CIDR block used for destination matches. The value that you provide must match the CIDR of an existing route in the table.
     */
    destinationCidrBlock?: string;
    /**
     *  The ID of the prefix list. Use a prefix list in place of <code>DestinationCidrBlock</code>. You cannot use <code>DestinationPrefixListId</code> and <code>DestinationCidrBlock</code> in the same request.
     */
    destinationPrefixListId?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the local gateway route table.
     */
    localGatewayRouteTableId: string;
    /**
     *  The ID of the virtual interface group.
     */
    localGatewayVirtualInterfaceGroupId?: string;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId?: string;
    version: GETModifyLocalGatewayRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
