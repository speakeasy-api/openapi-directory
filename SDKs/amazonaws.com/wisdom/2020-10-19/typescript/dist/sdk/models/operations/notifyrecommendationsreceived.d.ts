import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NotifyRecommendationsReceivedRequestBody extends SpeakeasyBase {
    /**
     * The identifiers of the recommendations.
     */
    recommendationIds: string[];
}
export declare class NotifyRecommendationsReceivedRequest extends SpeakeasyBase {
    requestBody: NotifyRecommendationsReceivedRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: string;
    /**
     * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    sessionId: string;
}
export declare class NotifyRecommendationsReceivedResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    notifyRecommendationsReceivedResponse?: shared.NotifyRecommendationsReceivedResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
