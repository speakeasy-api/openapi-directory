import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteInfrastructureConfigurationRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration to delete.
     */
    infrastructureConfigurationArn: string;
}
export declare class DeleteInfrastructureConfigurationResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteInfrastructureConfigurationResponse?: shared.DeleteInfrastructureConfigurationResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceDependencyException
     */
    resourceDependencyException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
