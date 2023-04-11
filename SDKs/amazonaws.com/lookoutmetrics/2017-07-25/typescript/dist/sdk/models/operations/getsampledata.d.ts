import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about the source configuration in Amazon S3.
 */
export declare class GetSampleDataRequestBodyS3SourceConfig extends SpeakeasyBase {
    /**
     * Contains information about a source file's formatting.
     */
    fileFormatDescriptor?: shared.FileFormatDescriptor;
    historicalDataPathList?: string[];
    roleArn?: string;
    templatedPathList?: string[];
}
export declare class GetSampleDataRequestBody extends SpeakeasyBase {
    /**
     * Contains information about the source configuration in Amazon S3.
     */
    s3SourceConfig?: GetSampleDataRequestBodyS3SourceConfig;
}
export declare class GetSampleDataRequest extends SpeakeasyBase {
    requestBody: GetSampleDataRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSampleDataResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getSampleDataResponse?: shared.GetSampleDataResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
