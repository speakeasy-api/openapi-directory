import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDirectConnectGatewayAssociationsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAssociations = "OvertureService.DescribeDirectConnectGatewayAssociations"
}
export declare class DescribeDirectConnectGatewayAssociationsRequest extends SpeakeasyBase {
    describeDirectConnectGatewayAssociationsRequest: shared.DescribeDirectConnectGatewayAssociationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewayAssociationsXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewayAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDirectConnectGatewayAssociationsResult?: shared.DescribeDirectConnectGatewayAssociationsResult;
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
