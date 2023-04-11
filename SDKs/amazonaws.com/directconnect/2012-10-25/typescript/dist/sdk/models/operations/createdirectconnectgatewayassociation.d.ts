import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGatewayAssociation = "OvertureService.CreateDirectConnectGatewayAssociation"
}
export declare class CreateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    createDirectConnectGatewayAssociationRequest: shared.CreateDirectConnectGatewayAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectConnectGatewayAssociationXAmzTargetEnum;
}
export declare class CreateDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDirectConnectGatewayAssociationResult?: shared.CreateDirectConnectGatewayAssociationResult;
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
