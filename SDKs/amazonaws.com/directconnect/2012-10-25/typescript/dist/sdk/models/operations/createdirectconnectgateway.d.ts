import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDirectConnectGatewayXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGateway = "OvertureService.CreateDirectConnectGateway"
}
export declare class CreateDirectConnectGatewayRequest extends SpeakeasyBase {
    createDirectConnectGatewayRequest: shared.CreateDirectConnectGatewayRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectConnectGatewayXAmzTargetEnum;
}
export declare class CreateDirectConnectGatewayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDirectConnectGatewayResult?: shared.CreateDirectConnectGatewayResult;
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
