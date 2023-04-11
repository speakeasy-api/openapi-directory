import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
 */
export declare class PutReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
/**
 * Required. The format to use for the generated report.
 */
export declare enum PutReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV",
    Parquet = "PARQUET"
}
/**
 * Required. The cadence to generate the report.
 */
export declare enum PutReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    All = "ALL"
}
export declare class PutReportDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
     */
    destinationS3Location: PutReportDefinitionRequestBodyDestinationS3Location;
    /**
     * Required. The format to use for the generated report.
     */
    format: PutReportDefinitionRequestBodyFormatEnum;
    /**
     * Required. Description of the report.
     */
    reportDescription: string;
    /**
     * Required. The cadence to generate the report.
     */
    reportFrequency: PutReportDefinitionRequestBodyReportFrequencyEnum;
    /**
     * Required. ID of the report. You can choose any valid string matching the pattern for the ID.
     */
    reportId: string;
}
export declare class PutReportDefinitionRequest extends SpeakeasyBase {
    requestBody: PutReportDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutReportDefinitionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putReportDefinitionResult?: shared.PutReportDefinitionResult;
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
