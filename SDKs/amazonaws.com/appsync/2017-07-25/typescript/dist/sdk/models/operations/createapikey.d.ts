import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApiKeyRequestBody extends SpeakeasyBase {
    /**
     * A description of the purpose of the API key.
     */
    description?: string;
    /**
     * From the creation time, the time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .
     */
    expires?: number;
}
export declare class CreateApiKeyRequest extends SpeakeasyBase {
    requestBody: CreateApiKeyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID for your GraphQL API.
     */
    apiId: string;
}
export declare class CreateApiKeyResponse extends SpeakeasyBase {
    /**
     * ApiKeyLimitExceededException
     */
    apiKeyLimitExceededException?: any;
    /**
     * ApiKeyValidityOutOfBoundsException
     */
    apiKeyValidityOutOfBoundsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createApiKeyResponse?: shared.CreateApiKeyResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
