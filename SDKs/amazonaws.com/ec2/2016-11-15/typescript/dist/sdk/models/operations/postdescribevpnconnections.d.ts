import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVpnConnectionsActionEnum {
    DescribeVpnConnections = "DescribeVpnConnections"
}
export declare enum POSTDescribeVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVpnConnectionsRequest extends SpeakeasyBase {
    action: POSTDescribeVpnConnectionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeVpnConnectionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVpnConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
