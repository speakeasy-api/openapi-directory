import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The billing period range in which the custom line item request will be applied.
 */
export declare class BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange extends SpeakeasyBase {
    exclusiveEndBillingPeriod?: string;
    inclusiveStartBillingPeriod?: string;
}
export declare class BatchAssociateResourcesToCustomLineItemRequestBody extends SpeakeasyBase {
    /**
     *  The billing period range in which the custom line item request will be applied.
     */
    billingPeriodRange?: BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange;
    /**
     *  A list containing the ARNs of the resources to be associated.
     */
    resourceArns: string[];
    /**
     *  A percentage custom line item ARN to associate the resources to.
     */
    targetArn: string;
}
export declare class BatchAssociateResourcesToCustomLineItemRequest extends SpeakeasyBase {
    requestBody: BatchAssociateResourcesToCustomLineItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchAssociateResourcesToCustomLineItemResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchAssociateResourcesToCustomLineItemOutput?: shared.BatchAssociateResourcesToCustomLineItemOutput;
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
    /**
     * ServiceLimitExceededException
     */
    serviceLimitExceededException?: any;
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
