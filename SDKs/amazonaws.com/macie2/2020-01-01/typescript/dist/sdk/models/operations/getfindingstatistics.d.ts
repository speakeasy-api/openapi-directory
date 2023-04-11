import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
 */
export declare class GetFindingStatisticsRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Record<string, shared.CriterionAdditionalProperties>;
}
/**
 * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
 */
export declare enum GetFindingStatisticsRequestBodyGroupByEnum {
    ResourcesAffectedS3BucketName = "resourcesAffected.s3Bucket.name",
    Type = "type",
    ClassificationDetailsJobId = "classificationDetails.jobId",
    SeverityDescription = "severity.description"
}
/**
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
 */
export declare class GetFindingStatisticsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: shared.FindingStatisticsSortAttributeNameEnum;
    orderBy?: shared.OrderByEnum;
}
export declare class GetFindingStatisticsRequestBody extends SpeakeasyBase {
    /**
     * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
     */
    findingCriteria?: GetFindingStatisticsRequestBodyFindingCriteria;
    /**
     * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
     */
    groupBy: GetFindingStatisticsRequestBodyGroupByEnum;
    /**
     * The maximum number of items to include in each page of the response.
     */
    size?: number;
    /**
     * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
     */
    sortCriteria?: GetFindingStatisticsRequestBodySortCriteria;
}
export declare class GetFindingStatisticsRequest extends SpeakeasyBase {
    requestBody: GetFindingStatisticsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFindingStatisticsResponse extends SpeakeasyBase {
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
    getFindingStatisticsResponse?: shared.GetFindingStatisticsResponse;
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
