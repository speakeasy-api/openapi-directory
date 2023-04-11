import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationActionEnum {
    DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation = "DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation"
}
export declare enum POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest extends SpeakeasyBase {
    action: POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
