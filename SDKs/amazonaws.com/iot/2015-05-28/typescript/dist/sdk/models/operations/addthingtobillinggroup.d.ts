import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddThingToBillingGroupRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the billing group.
     */
    billingGroupArn?: string;
    /**
     * <p>The name of the billing group.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
     */
    billingGroupName?: string;
    /**
     * The ARN of the thing to be added to the billing group.
     */
    thingArn?: string;
    /**
     * The name of the thing to be added to the billing group.
     */
    thingName?: string;
}
export declare class AddThingToBillingGroupRequest extends SpeakeasyBase {
    requestBody: AddThingToBillingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddThingToBillingGroupResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addThingToBillingGroupResponse?: Record<string, any>;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
