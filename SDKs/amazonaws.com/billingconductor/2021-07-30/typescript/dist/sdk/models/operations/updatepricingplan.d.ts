import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePricingPlanRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the pricing plan that you're updating.
     */
    arn: string;
    /**
     * The description of the pricing plan.
     */
    description?: string;
    /**
     * The name of the pricing plan. The name must be unique to each pricing plan.
     */
    name?: string;
}
export declare class UpdatePricingPlanRequest extends SpeakeasyBase {
    requestBody: UpdatePricingPlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePricingPlanResponse extends SpeakeasyBase {
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
     * Success
     */
    updatePricingPlanOutput?: shared.UpdatePricingPlanOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
