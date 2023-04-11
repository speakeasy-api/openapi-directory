import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateThingGroupsForThingRequestBody extends SpeakeasyBase {
    /**
     * Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
     */
    overrideDynamicGroups?: boolean;
    /**
     * The groups to which the thing will be added.
     */
    thingGroupsToAdd?: string[];
    /**
     * The groups from which the thing will be removed.
     */
    thingGroupsToRemove?: string[];
    /**
     * The thing whose group memberships will be updated.
     */
    thingName?: string;
}
export declare class UpdateThingGroupsForThingRequest extends SpeakeasyBase {
    requestBody: UpdateThingGroupsForThingRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateThingGroupsForThingResponse extends SpeakeasyBase {
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
    updateThingGroupsForThingResponse?: Record<string, any>;
}
