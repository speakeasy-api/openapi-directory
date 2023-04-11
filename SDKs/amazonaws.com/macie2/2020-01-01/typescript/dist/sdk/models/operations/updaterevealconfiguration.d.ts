import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.
 */
export declare class UpdateRevealConfigurationRequestBodyConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
    status?: shared.RevealStatusEnum;
}
export declare class UpdateRevealConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.
     */
    configuration: UpdateRevealConfigurationRequestBodyConfiguration;
}
export declare class UpdateRevealConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateRevealConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRevealConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateRevealConfigurationResponse?: shared.UpdateRevealConfigurationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
