import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInferenceExperimentsXAmzTargetEnum {
    SageMakerListInferenceExperiments = "SageMaker.ListInferenceExperiments"
}
export declare class ListInferenceExperimentsRequest extends SpeakeasyBase {
    listInferenceExperimentsRequest: shared.ListInferenceExperimentsRequest;
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
    xAmzTarget: ListInferenceExperimentsXAmzTargetEnum;
}
export declare class ListInferenceExperimentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listInferenceExperimentsResponse?: shared.ListInferenceExperimentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
