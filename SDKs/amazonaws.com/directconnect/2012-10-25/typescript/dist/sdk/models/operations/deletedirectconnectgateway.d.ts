import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDirectConnectGatewayXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGateway = "OvertureService.DeleteDirectConnectGateway"
}
export declare class DeleteDirectConnectGatewayRequest extends SpeakeasyBase {
    deleteDirectConnectGatewayRequest: shared.DeleteDirectConnectGatewayRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectConnectGatewayXAmzTargetEnum;
}
export declare class DeleteDirectConnectGatewayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDirectConnectGatewayResult?: shared.DeleteDirectConnectGatewayResult;
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
