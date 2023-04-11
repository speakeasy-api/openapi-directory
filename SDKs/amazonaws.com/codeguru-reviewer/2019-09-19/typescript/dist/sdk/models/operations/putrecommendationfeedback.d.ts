import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRecommendationFeedbackRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
     */
    codeReviewArn: string;
    /**
     * List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.
     */
    reactions: shared.ReactionEnum[];
    /**
     * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
     */
    recommendationId: string;
}
export declare class PutRecommendationFeedbackRequest extends SpeakeasyBase {
    requestBody: PutRecommendationFeedbackRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutRecommendationFeedbackResponse extends SpeakeasyBase {
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
    putRecommendationFeedbackResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
