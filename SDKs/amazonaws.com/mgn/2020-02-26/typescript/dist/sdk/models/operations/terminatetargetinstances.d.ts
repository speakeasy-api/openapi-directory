import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TerminateTargetInstancesRequestBody extends SpeakeasyBase {
    /**
     * Terminate Target instance by Source Server IDs.
     */
    sourceServerIDs: string[];
    /**
     * Terminate Target instance by Tags.
     */
    tags?: Record<string, string>;
}
export declare class TerminateTargetInstancesRequest extends SpeakeasyBase {
    requestBody: TerminateTargetInstancesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TerminateTargetInstancesResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    terminateTargetInstancesResponse?: shared.TerminateTargetInstancesResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
