import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVpcConnectorXAmzTargetEnum {
    AppRunnerDeleteVpcConnector = "AppRunner.DeleteVpcConnector"
}
export declare class DeleteVpcConnectorRequest extends SpeakeasyBase {
    deleteVpcConnectorRequest: shared.DeleteVpcConnectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcConnectorXAmzTargetEnum;
}
export declare class DeleteVpcConnectorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteVpcConnectorResponse?: shared.DeleteVpcConnectorResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
