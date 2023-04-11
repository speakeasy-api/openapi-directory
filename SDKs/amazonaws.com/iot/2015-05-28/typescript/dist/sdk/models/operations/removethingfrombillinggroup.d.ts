import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveThingFromBillingGroupRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the billing group.
     */
    billingGroupArn?: string;
    /**
     * The name of the billing group.
     */
    billingGroupName?: string;
    /**
     * The ARN of the thing to be removed from the billing group.
     */
    thingArn?: string;
    /**
     * The name of the thing to be removed from the billing group.
     */
    thingName?: string;
}
export declare class RemoveThingFromBillingGroupRequest extends SpeakeasyBase {
    requestBody: RemoveThingFromBillingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveThingFromBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    removeThingFromBillingGroupResponse?: Record<string, any>;
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
}
