import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartBuildXAmzTargetEnum {
    CodeBuild20161006StartBuild = "CodeBuild_20161006.StartBuild"
}
export declare class StartBuildRequest extends SpeakeasyBase {
    startBuildInput: shared.StartBuildInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBuildXAmzTargetEnum;
}
export declare class StartBuildResponse extends SpeakeasyBase {
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
    startBuildOutput?: shared.StartBuildOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
