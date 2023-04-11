import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopAssessmentRunXAmzTargetEnum {
    InspectorServiceStopAssessmentRun = "InspectorService.StopAssessmentRun"
}
export declare class StopAssessmentRunRequest extends SpeakeasyBase {
    stopAssessmentRunRequest: shared.StopAssessmentRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAssessmentRunXAmzTargetEnum;
}
export declare class StopAssessmentRunResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
