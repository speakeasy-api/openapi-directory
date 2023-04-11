import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDirectConnectGatewayAssociationXAmzTargetEnum {
    OvertureServiceUpdateDirectConnectGatewayAssociation = "OvertureService.UpdateDirectConnectGatewayAssociation"
}
export declare class UpdateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    updateDirectConnectGatewayAssociationRequest: shared.UpdateDirectConnectGatewayAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDirectConnectGatewayAssociationXAmzTargetEnum;
}
export declare class UpdateDirectConnectGatewayAssociationResponse extends SpeakeasyBase {
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
    updateDirectConnectGatewayAssociationResult?: shared.UpdateDirectConnectGatewayAssociationResult;
}
