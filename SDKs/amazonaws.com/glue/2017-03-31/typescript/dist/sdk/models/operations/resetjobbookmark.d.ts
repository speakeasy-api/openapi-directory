import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResetJobBookmarkXAmzTargetEnum {
    AWSGlueResetJobBookmark = "AWSGlue.ResetJobBookmark"
}
export declare class ResetJobBookmarkRequest extends SpeakeasyBase {
    resetJobBookmarkRequest: shared.ResetJobBookmarkRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetJobBookmarkXAmzTargetEnum;
}
export declare class ResetJobBookmarkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * Success
     */
    resetJobBookmarkResponse?: shared.ResetJobBookmarkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
