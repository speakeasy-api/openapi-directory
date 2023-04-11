import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGatewayAssociationProposal = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"
}
export declare class DeleteDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    deleteDirectConnectGatewayAssociationProposalRequest: shared.DeleteDirectConnectGatewayAssociationProposalRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}
export declare class DeleteDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDirectConnectGatewayAssociationProposalResult?: shared.DeleteDirectConnectGatewayAssociationProposalResult;
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
