import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAssociationProposals = "OvertureService.DescribeDirectConnectGatewayAssociationProposals"
}
export declare class DescribeDirectConnectGatewayAssociationProposalsRequest extends SpeakeasyBase {
    describeDirectConnectGatewayAssociationProposalsRequest: shared.DescribeDirectConnectGatewayAssociationProposalsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewayAssociationProposalsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDirectConnectGatewayAssociationProposalsResult?: shared.DescribeDirectConnectGatewayAssociationProposalsResult;
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
