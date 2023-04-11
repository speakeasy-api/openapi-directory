import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationActionEnum {
    CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation = "CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation"
}
export declare enum POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest extends SpeakeasyBase {
    action: POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
