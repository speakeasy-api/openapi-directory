import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Amazon S3 destination where errors associated with the job creation request are saved.
 */
export declare class CreateBulkImportJobRequestBodyErrorReportLocation extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
/**
 * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
 */
export declare class CreateBulkImportJobRequestBodyJobConfiguration extends SpeakeasyBase {
    fileFormat?: shared.FileFormat;
}
export declare class CreateBulkImportJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon S3 destination where errors associated with the job creation request are saved.
     */
    errorReportLocation: CreateBulkImportJobRequestBodyErrorReportLocation;
    /**
     * The files in the specified Amazon S3 bucket that contain your data.
     */
    files: shared.File[];
    /**
     * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
     */
    jobConfiguration: CreateBulkImportJobRequestBodyJobConfiguration;
    /**
     * The unique name that helps identify the job request.
     */
    jobName: string;
    /**
     * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.
     */
    jobRoleArn: string;
}
export declare class CreateBulkImportJobRequest extends SpeakeasyBase {
    requestBody: CreateBulkImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBulkImportJobResponse extends SpeakeasyBase {
    /**
     * ConflictingOperationException
     */
    conflictingOperationException?: any;
    contentType: string;
    /**
     * Success
     */
    createBulkImportJobResponse?: shared.CreateBulkImportJobResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
