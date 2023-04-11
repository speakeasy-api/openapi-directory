import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The schedule for running a classification job. Valid values are:
 */
export declare enum CreateClassificationJobRequestBodyJobTypeEnum {
    OneTime = "ONE_TIME",
    Scheduled = "SCHEDULED"
}
/**
 * The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:
 */
export declare enum CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum {
    All = "ALL",
    Exclude = "EXCLUDE",
    Include = "INCLUDE",
    None = "NONE"
}
/**
 * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
 */
export declare class CreateClassificationJobRequestBodyS3JobDefinition extends SpeakeasyBase {
    bucketCriteria?: shared.S3BucketCriteriaForJob;
    bucketDefinitions?: shared.S3BucketDefinitionForJob[];
    scoping?: shared.Scoping;
}
/**
 * Specifies the recurrence pattern for running a classification job.
 */
export declare class CreateClassificationJobRequestBodyScheduleFrequency extends SpeakeasyBase {
    dailySchedule?: Record<string, any>;
    monthlySchedule?: shared.MonthlySchedule;
    weeklySchedule?: shared.WeeklySchedule;
}
export declare class CreateClassificationJobRequestBody extends SpeakeasyBase {
    /**
     * An array of unique identifiers, one for each allow list for the job to use when it analyzes data.
     */
    allowListIds?: string[];
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken: string;
    /**
     * An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.
     */
    customDataIdentifierIds?: string[];
    /**
     * A custom description of the job. The description can contain as many as 200 characters.
     */
    description?: string;
    /**
     * <p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p>
     */
    initialRun?: boolean;
    /**
     * The schedule for running a classification job. Valid values are:
     */
    jobType: CreateClassificationJobRequestBodyJobTypeEnum;
    /**
     * <p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>
     */
    managedDataIdentifierIds?: string[];
    /**
     * The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:
     */
    managedDataIdentifierSelector?: CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;
    /**
     * A custom name for the job. The name can contain as many as 500 characters.
     */
    name: string;
    /**
     * Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
     */
    s3JobDefinition: CreateClassificationJobRequestBodyS3JobDefinition;
    /**
     * The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.
     */
    samplingPercentage?: number;
    /**
     * Specifies the recurrence pattern for running a classification job.
     */
    scheduleFrequency?: CreateClassificationJobRequestBodyScheduleFrequency;
    /**
     * A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateClassificationJobRequest extends SpeakeasyBase {
    requestBody: CreateClassificationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateClassificationJobResponse extends SpeakeasyBase {
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
     * Success
     */
    createClassificationJobResponse?: shared.CreateClassificationJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
