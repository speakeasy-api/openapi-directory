import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RetryBuildXAmzTargetEnum {
    CodeBuild20161006RetryBuild = "CodeBuild_20161006.RetryBuild"
}
export declare class RetryBuildRequest extends SpeakeasyBase {
    retryBuildInput: shared.RetryBuildInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryBuildXAmzTargetEnum;
}
export declare class RetryBuildResponse extends SpeakeasyBase {
    /**
     * AccountLimitExceededException
     */
    accountLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    retryBuildOutput?: shared.RetryBuildOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
