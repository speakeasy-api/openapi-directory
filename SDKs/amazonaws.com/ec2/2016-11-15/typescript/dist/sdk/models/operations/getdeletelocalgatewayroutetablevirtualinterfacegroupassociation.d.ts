import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationActionEnum {
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation = "DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation"
}
export declare enum GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest extends SpeakeasyBase {
    action: GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     *  The ID of the local gateway route table virtual interface group association.
     */
    localGatewayRouteTableVirtualInterfaceGroupAssociationId: string;
    version: GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
