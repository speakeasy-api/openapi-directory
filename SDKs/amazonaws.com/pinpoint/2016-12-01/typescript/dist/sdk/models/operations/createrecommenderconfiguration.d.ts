import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
 */
export declare class CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration extends SpeakeasyBase {
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
export declare class CreateRecommenderConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
     */
    createRecommenderConfiguration: CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration;
}
export declare class CreateRecommenderConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateRecommenderConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRecommenderConfigurationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createRecommenderConfigurationResponse?: shared.CreateRecommenderConfigurationResponse;
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
}
