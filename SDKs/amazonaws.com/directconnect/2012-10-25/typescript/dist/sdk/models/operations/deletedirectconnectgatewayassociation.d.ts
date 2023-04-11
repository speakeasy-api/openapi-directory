import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGatewayAssociation = "OvertureService.DeleteDirectConnectGatewayAssociation"
}
export declare class DeleteDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    deleteDirectConnectGatewayAssociationRequest: shared.DeleteDirectConnectGatewayAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectConnectGatewayAssociationXAmzTargetEnum;
}
export declare class DeleteDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDirectConnectGatewayAssociationResult?: shared.DeleteDirectConnectGatewayAssociationResult;
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
