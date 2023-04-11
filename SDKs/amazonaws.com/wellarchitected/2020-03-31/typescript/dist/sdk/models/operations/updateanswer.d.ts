import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reason why a question is not applicable to your workload.
 */
export declare enum UpdateAnswerRequestBodyReasonEnum {
    OutOfScope = "OUT_OF_SCOPE",
    BusinessPriorities = "BUSINESS_PRIORITIES",
    ArchitectureConstraints = "ARCHITECTURE_CONSTRAINTS",
    Other = "OTHER",
    None = "NONE"
}
export declare class UpdateAnswerRequestBody extends SpeakeasyBase {
    /**
     * A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.
     */
    choiceUpdates?: Record<string, shared.ChoiceUpdate>;
    /**
     * Defines whether this question is applicable to a lens review.
     */
    isApplicable?: boolean;
    /**
     * The notes associated with the workload.
     */
    notes?: string;
    /**
     * The reason why a question is not applicable to your workload.
     */
    reason?: UpdateAnswerRequestBodyReasonEnum;
    /**
     * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
     */
    selectedChoices?: string[];
}
export declare class UpdateAnswerRequest extends SpeakeasyBase {
    lensAlias: string;
    questionId: string;
    requestBody: UpdateAnswerRequestBody;
    workloadId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAnswerResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * Success
     */
    updateAnswerOutput?: shared.UpdateAnswerOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
