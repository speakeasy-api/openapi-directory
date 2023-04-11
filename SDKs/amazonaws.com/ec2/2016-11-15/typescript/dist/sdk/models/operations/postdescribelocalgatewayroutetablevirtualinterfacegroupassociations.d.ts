import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum {
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations = "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"
}
export declare enum POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest extends SpeakeasyBase {
    action: POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
