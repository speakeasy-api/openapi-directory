import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartCutoverRequestBody extends SpeakeasyBase {
    /**
     * Start Cutover by Source Server IDs.
     */
    sourceServerIDs: string[];
    /**
     * Start Cutover by Tags.
     */
    tags?: Record<string, string>;
}
export declare class StartCutoverRequest extends SpeakeasyBase {
    requestBody: StartCutoverRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartCutoverResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    startCutoverResponse?: shared.StartCutoverResponse;
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
