import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
 */
export declare class UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration extends SpeakeasyBase {
    attributes?: Record<string, string>;
    description?: string;
    name?: string;
    recommendationProviderIdType?: string;
    recommendationProviderRoleArn?: string;
    recommendationProviderUri?: string;
    recommendationTransformerUri?: string;
    recommendationsDisplayName?: string;
    recommendationsPerMessage?: number;
}
export declare class UpdateRecommenderConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
     */
    updateRecommenderConfiguration: UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration;
}
export declare class UpdateRecommenderConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateRecommenderConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
     */
    recommenderId: string;
}
export declare class UpdateRecommenderConfigurationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * PayloadTooLargeException
     */
    payloadTooLargeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateRecommenderConfigurationResponse?: shared.UpdateRecommenderConfigurationResponse;
}
