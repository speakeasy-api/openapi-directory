import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInferenceExecutionsXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceListInferenceExecutions = "AWSLookoutEquipmentFrontendService.ListInferenceExecutions"
}
export declare class ListInferenceExecutionsRequest extends SpeakeasyBase {
    listInferenceExecutionsRequest: shared.ListInferenceExecutionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInferenceExecutionsXAmzTargetEnum;
}
export declare class ListInferenceExecutionsResponse extends SpeakeasyBase {
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
    listInferenceExecutionsResponse?: shared.ListInferenceExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
