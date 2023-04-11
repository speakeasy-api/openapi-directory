import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartTestRequestBody extends SpeakeasyBase {
    /**
     * Start Test for Source Server IDs.
     */
    sourceServerIDs: string[];
    /**
     * Start Test by Tags.
     */
    tags?: Record<string, string>;
}
export declare class StartTestRequest extends SpeakeasyBase {
    requestBody: StartTestRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartTestResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    startTestResponse?: shared.StartTestResponse;
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
