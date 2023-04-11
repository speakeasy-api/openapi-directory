import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The billing period range in which the custom line item request will be applied.
 */
export declare class BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange extends SpeakeasyBase {
    exclusiveEndBillingPeriod?: string;
    inclusiveStartBillingPeriod?: string;
}
export declare class BatchDisassociateResourcesFromCustomLineItemRequestBody extends SpeakeasyBase {
    /**
     *  The billing period range in which the custom line item request will be applied.
     */
    billingPeriodRange?: BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange;
    /**
     *  A list containing the ARNs of resources to be disassociated.
     */
    resourceArns: string[];
    /**
     *  A percentage custom line item ARN to disassociate the resources from.
     */
    targetArn: string;
}
export declare class BatchDisassociateResourcesFromCustomLineItemRequest extends SpeakeasyBase {
    requestBody: BatchDisassociateResourcesFromCustomLineItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisassociateResourcesFromCustomLineItemResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchDisassociateResourcesFromCustomLineItemOutput?: shared.BatchDisassociateResourcesFromCustomLineItemOutput;
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
     * ValidationException
     */
    validationException?: any;
}
