import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
 */
export declare class UpdateReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
/**
 * Required. The format to use for the generated report.
 */
export declare enum UpdateReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV",
    Parquet = "PARQUET"
}
/**
 * Required. The cadence to generate the report.
 */
export declare enum UpdateReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    All = "ALL"
}
export declare class UpdateReportDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
     */
    destinationS3Location: UpdateReportDefinitionRequestBodyDestinationS3Location;
    /**
     * Required. The format to use for the generated report.
     */
    format: UpdateReportDefinitionRequestBodyFormatEnum;
    /**
     * Required. Description of the report.
     */
    reportDescription: string;
    /**
     * Required. The cadence to generate the report.
     */
    reportFrequency: UpdateReportDefinitionRequestBodyReportFrequencyEnum;
}
export declare class UpdateReportDefinitionRequest extends SpeakeasyBase {
    requestBody: UpdateReportDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Required. ID of the report to update.
     */
    reportId: string;
}
export declare class UpdateReportDefinitionResponse extends SpeakeasyBase {
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
    updateReportDefinitionResult?: shared.UpdateReportDefinitionResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
