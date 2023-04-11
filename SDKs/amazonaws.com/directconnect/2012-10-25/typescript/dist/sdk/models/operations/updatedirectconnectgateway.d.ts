import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDirectConnectGatewayXAmzTargetEnum {
    OvertureServiceUpdateDirectConnectGateway = "OvertureService.UpdateDirectConnectGateway"
}
export declare class UpdateDirectConnectGatewayRequest extends SpeakeasyBase {
    updateDirectConnectGatewayRequest: shared.UpdateDirectConnectGatewayRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDirectConnectGatewayXAmzTargetEnum;
}
export declare class UpdateDirectConnectGatewayResponse extends SpeakeasyBase {
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
    updateDirectConnectGatewayResponse?: shared.UpdateDirectConnectGatewayResponse;
}
