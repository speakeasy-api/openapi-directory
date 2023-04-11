import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.
 */
export declare class PutClassificationExportConfigurationRequestBodyConfiguration extends SpeakeasyBase {
    s3Destination?: shared.S3Destination;
}
export declare class PutClassificationExportConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.
     */
    configuration: PutClassificationExportConfigurationRequestBodyConfiguration;
}
export declare class PutClassificationExportConfigurationRequest extends SpeakeasyBase {
    requestBody: PutClassificationExportConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutClassificationExportConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putClassificationExportConfigurationResponse?: shared.PutClassificationExportConfigurationResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
