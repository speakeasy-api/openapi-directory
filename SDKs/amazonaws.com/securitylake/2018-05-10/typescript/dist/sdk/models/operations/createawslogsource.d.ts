import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAwsLogSourceRequestBody extends SpeakeasyBase {
    /**
     * Enables data collection from specific Amazon Web Services sources in all specific accounts and specific Regions.
     */
    enableAllDimensions?: Record<string, Record<string, string[]>>;
    /**
     * Enables data collection from all Amazon Web Services sources in specific accounts or Regions.
     */
    enableSingleDimension?: string[];
    /**
     * Enables data collection from specific Amazon Web Services sources in specific accounts or Regions.
     */
    enableTwoDimensions?: Record<string, string[]>;
    /**
     * Specifies the input order to enable dimensions in Security Lake, namely Region, source type, and member account.
     */
    inputOrder: shared.DimensionEnum[];
}
export declare class CreateAwsLogSourceRequest extends SpeakeasyBase {
    requestBody: CreateAwsLogSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAwsLogSourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    createAwsLogSourceResponse?: shared.CreateAwsLogSourceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * S3Exception
     */
    s3Exception?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
