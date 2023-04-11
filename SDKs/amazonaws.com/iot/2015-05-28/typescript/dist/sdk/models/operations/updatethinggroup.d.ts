import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Thing group properties.
 */
export declare class UpdateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class UpdateThingGroupRequestBody extends SpeakeasyBase {
    /**
     * The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail.
     */
    expectedVersion?: number;
    /**
     * Thing group properties.
     */
    thingGroupProperties: UpdateThingGroupRequestBodyThingGroupProperties;
}
export declare class UpdateThingGroupRequest extends SpeakeasyBase {
    requestBody: UpdateThingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The thing group to update.
     */
    thingGroupName: string;
}
export declare class UpdateThingGroupResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateThingGroupResponse?: shared.UpdateThingGroupResponse;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}
