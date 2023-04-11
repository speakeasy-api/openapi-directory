import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveThingFromThingGroupRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the thing to remove from the group.
     */
    thingArn?: string;
    /**
     * The group ARN.
     */
    thingGroupArn?: string;
    /**
     * The group name.
     */
    thingGroupName?: string;
    /**
     * The name of the thing to remove from the group.
     */
    thingName?: string;
}
export declare class RemoveThingFromThingGroupRequest extends SpeakeasyBase {
    requestBody: RemoveThingFromThingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveThingFromThingGroupResponse extends SpeakeasyBase {
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
    removeThingFromThingGroupResponse?: Record<string, any>;
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
