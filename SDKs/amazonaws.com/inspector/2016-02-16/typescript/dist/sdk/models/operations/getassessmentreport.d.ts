import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAssessmentReportXAmzTargetEnum {
    InspectorServiceGetAssessmentReport = "InspectorService.GetAssessmentReport"
}
export declare class GetAssessmentReportRequest extends SpeakeasyBase {
    getAssessmentReportRequest: shared.GetAssessmentReportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAssessmentReportXAmzTargetEnum;
}
export declare class GetAssessmentReportResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AssessmentRunInProgressException
     */
    assessmentRunInProgressException?: any;
    contentType: string;
    /**
     * Success
     */
    getAssessmentReportResponse?: shared.GetAssessmentReportResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    /**
     * UnsupportedFeatureException
     */
    unsupportedFeatureException?: any;
}
