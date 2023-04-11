import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeLocalGatewayVirtualInterfacesActionEnum {
    DescribeLocalGatewayVirtualInterfaces = "DescribeLocalGatewayVirtualInterfaces"
}
export declare enum POSTDescribeLocalGatewayVirtualInterfacesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeLocalGatewayVirtualInterfacesRequest extends SpeakeasyBase {
    action: POSTDescribeLocalGatewayVirtualInterfacesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeLocalGatewayVirtualInterfacesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeLocalGatewayVirtualInterfacesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
