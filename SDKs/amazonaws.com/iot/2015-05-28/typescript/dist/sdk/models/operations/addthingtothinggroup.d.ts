import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddThingToThingGroupRequestBody extends SpeakeasyBase {
    /**
     * Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
     */
    overrideDynamicGroups?: boolean;
    /**
     * The ARN of the thing to add to a group.
     */
    thingArn?: string;
    /**
     * The ARN of the group to which you are adding a thing.
     */
    thingGroupArn?: string;
    /**
     * The name of the group to which you are adding a thing.
     */
    thingGroupName?: string;
    /**
     * The name of the thing to add to a group.
     */
    thingName?: string;
}
export declare class AddThingToThingGroupRequest extends SpeakeasyBase {
    requestBody: AddThingToThingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddThingToThingGroupResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addThingToThingGroupResponse?: Record<string, any>;
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
