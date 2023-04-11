import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInferenceSchedulersXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceListInferenceSchedulers = "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers"
}
export declare class ListInferenceSchedulersRequest extends SpeakeasyBase {
    listInferenceSchedulersRequest: shared.ListInferenceSchedulersRequest;
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
    xAmzTarget: ListInferenceSchedulersXAmzTargetEnum;
}
export declare class ListInferenceSchedulersResponse extends SpeakeasyBase {
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
    listInferenceSchedulersResponse?: shared.ListInferenceSchedulersResponse;
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
