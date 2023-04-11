import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGatewayAssociationProposal = "OvertureService.CreateDirectConnectGatewayAssociationProposal"
}
export declare class CreateDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    createDirectConnectGatewayAssociationProposalRequest: shared.CreateDirectConnectGatewayAssociationProposalRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}
export declare class CreateDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDirectConnectGatewayAssociationProposalResult?: shared.CreateDirectConnectGatewayAssociationProposalResult;
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
