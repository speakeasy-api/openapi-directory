import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDistributionConfigurationRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration to delete.
     */
    distributionConfigurationArn: string;
}
export declare class DeleteDistributionConfigurationResponse extends SpeakeasyBase {
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
    deleteDistributionConfigurationResponse?: shared.DeleteDistributionConfigurationResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceDependencyException
     */
    resourceDependencyException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
