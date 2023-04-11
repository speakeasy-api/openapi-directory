import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiKeyRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
    /**
     * The ID for the API key.
     */
    id: string;
}
export declare class DeleteApiKeyResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApiKeyResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
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
