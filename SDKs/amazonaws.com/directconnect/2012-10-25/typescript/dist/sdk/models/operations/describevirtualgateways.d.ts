import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVirtualGatewaysXAmzTargetEnum {
    OvertureServiceDescribeVirtualGateways = "OvertureService.DescribeVirtualGateways"
}
export declare class DescribeVirtualGatewaysRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVirtualGatewaysXAmzTargetEnum;
}
export declare class DescribeVirtualGatewaysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    virtualGateways?: shared.VirtualGateways;
}
