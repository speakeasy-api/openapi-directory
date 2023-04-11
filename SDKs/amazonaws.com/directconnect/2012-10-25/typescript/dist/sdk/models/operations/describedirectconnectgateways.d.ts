import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDirectConnectGatewaysXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGateways = "OvertureService.DescribeDirectConnectGateways"
}
export declare class DescribeDirectConnectGatewaysRequest extends SpeakeasyBase {
    describeDirectConnectGatewaysRequest: shared.DescribeDirectConnectGatewaysRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewaysXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewaysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDirectConnectGatewaysResult?: shared.DescribeDirectConnectGatewaysResult;
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
}
