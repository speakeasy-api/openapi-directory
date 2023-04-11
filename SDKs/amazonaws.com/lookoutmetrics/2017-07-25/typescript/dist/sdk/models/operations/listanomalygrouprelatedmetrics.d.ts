import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.
 */
export declare enum ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnum {
    CauseOfInputAnomalyGroup = "CAUSE_OF_INPUT_ANOMALY_GROUP",
    EffectOfInputAnomalyGroup = "EFFECT_OF_INPUT_ANOMALY_GROUP"
}
export declare class ListAnomalyGroupRelatedMetricsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
    /**
     * The ID of the anomaly group.
     */
    anomalyGroupId: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.
     */
    relationshipTypeFilter?: ListAnomalyGroupRelatedMetricsRequestBodyRelationshipTypeFilterEnum;
}
export declare class ListAnomalyGroupRelatedMetricsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListAnomalyGroupRelatedMetricsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomalyGroupRelatedMetricsResponse extends SpeakeasyBase {
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
    listAnomalyGroupRelatedMetricsResponse?: shared.ListAnomalyGroupRelatedMetricsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
