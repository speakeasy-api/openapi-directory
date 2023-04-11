import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDistributionConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The idempotency token of the distribution configuration.
     */
    clientToken: string;
    /**
     * The description of the distribution configuration.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
     */
    distributionConfigurationArn: string;
    /**
     * The distributions of the distribution configuration.
     */
    distributions: shared.Distribution[];
}
export declare class UpdateDistributionConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateDistributionConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistributionConfigurationResponse extends SpeakeasyBase {
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
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    updateDistributionConfigurationResponse?: shared.UpdateDistributionConfigurationResponse;
}
