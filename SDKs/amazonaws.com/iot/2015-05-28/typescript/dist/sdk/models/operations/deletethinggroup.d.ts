import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteThingGroupRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The expected version of the thing group to delete.
     */
    expectedVersion?: number;
    /**
     * The name of the thing group to delete.
     */
    thingGroupName: string;
}
export declare class DeleteThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteThingGroupResponse?: Record<string, any>;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}
