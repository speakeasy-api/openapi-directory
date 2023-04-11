import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateAssessmentReportIntegrityRequestBody extends SpeakeasyBase {
    /**
     *  The relative path of the Amazon S3 bucket that the assessment report is stored in.
     */
    s3RelativePath: string;
}
export declare class ValidateAssessmentReportIntegrityRequest extends SpeakeasyBase {
    requestBody: ValidateAssessmentReportIntegrityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ValidateAssessmentReportIntegrityResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    validateAssessmentReportIntegrityResponse?: shared.ValidateAssessmentReportIntegrityResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
