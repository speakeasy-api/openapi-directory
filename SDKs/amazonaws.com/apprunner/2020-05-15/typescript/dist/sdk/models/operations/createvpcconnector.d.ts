import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVpcConnectorXAmzTargetEnum {
    AppRunnerCreateVpcConnector = "AppRunner.CreateVpcConnector"
}
export declare class CreateVpcConnectorRequest extends SpeakeasyBase {
    createVpcConnectorRequest: shared.CreateVpcConnectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcConnectorXAmzTargetEnum;
}
export declare class CreateVpcConnectorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createVpcConnectorResponse?: shared.CreateVpcConnectorResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
}
