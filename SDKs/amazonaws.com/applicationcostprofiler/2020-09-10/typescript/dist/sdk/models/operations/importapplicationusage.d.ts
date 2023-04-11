import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
 */
export declare class ImportApplicationUsageRequestBodySourceS3Location extends SpeakeasyBase {
    bucket?: string;
    key?: string;
    region?: shared.S3BucketRegionEnum;
}
export declare class ImportApplicationUsageRequestBody extends SpeakeasyBase {
    /**
     * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
     */
    sourceS3Location: ImportApplicationUsageRequestBodySourceS3Location;
}
export declare class ImportApplicationUsageRequest extends SpeakeasyBase {
    requestBody: ImportApplicationUsageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportApplicationUsageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    importApplicationUsageResult?: shared.ImportApplicationUsageResult;
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
     * ValidationException
     */
    validationException?: any;
}
