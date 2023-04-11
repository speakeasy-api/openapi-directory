import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDataIntegrationRequestBody extends SpeakeasyBase {
    /**
     * A description of the DataIntegration.
     */
    description?: string;
    /**
     * The name of the DataIntegration.
     */
    name?: string;
}
export declare class UpdateDataIntegrationRequest extends SpeakeasyBase {
    /**
     * A unique identifier for the DataIntegration.
     */
    identifier: string;
    requestBody: UpdateDataIntegrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDataIntegrationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
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
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDataIntegrationResponse?: Record<string, any>;
}
