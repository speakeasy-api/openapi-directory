import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The request to change the source server migration lifecycle state.
 */
export declare class ChangeServerLifeCycleStateRequestBodyLifeCycle extends SpeakeasyBase {
    state?: shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum;
}
export declare class ChangeServerLifeCycleStateRequestBody extends SpeakeasyBase {
    /**
     * The request to change the source server migration lifecycle state.
     */
    lifeCycle: ChangeServerLifeCycleStateRequestBodyLifeCycle;
    /**
     * The request to change the source server migration lifecycle state by source server ID.
     */
    sourceServerID: string;
}
export declare class ChangeServerLifeCycleStateRequest extends SpeakeasyBase {
    requestBody: ChangeServerLifeCycleStateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ChangeServerLifeCycleStateResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sourceServer?: shared.SourceServer;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
