import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum {
    OvertureServiceAcceptDirectConnectGatewayAssociationProposal = "OvertureService.AcceptDirectConnectGatewayAssociationProposal"
}
export declare class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    acceptDirectConnectGatewayAssociationProposalRequest: shared.AcceptDirectConnectGatewayAssociationProposalRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
}
export declare class AcceptDirectConnectGatewayAssociationProposalResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptDirectConnectGatewayAssociationProposalResult?: shared.AcceptDirectConnectGatewayAssociationProposalResult;
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
}
