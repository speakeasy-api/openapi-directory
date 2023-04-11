import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApiKeyRequestBody extends SpeakeasyBase {
    /**
     * A description of the purpose of the API key.
     */
    description?: string;
    /**
     * From the update time, the time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .
     */
    expires?: number;
}
export declare class UpdateApiKeyRequest extends SpeakeasyBase {
    requestBody: UpdateApiKeyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID for the GraphQL API.
     */
    apiId: string;
    /**
     * The API key ID.
     */
    id: string;
}
export declare class UpdateApiKeyResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateApiKeyResponse?: shared.UpdateApiKeyResponse;
}
