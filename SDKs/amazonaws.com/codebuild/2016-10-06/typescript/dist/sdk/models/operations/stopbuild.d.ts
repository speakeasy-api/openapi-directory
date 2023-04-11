import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopBuildXAmzTargetEnum {
    CodeBuild20161006StopBuild = "CodeBuild_20161006.StopBuild"
}
export declare class StopBuildRequest extends SpeakeasyBase {
    stopBuildInput: shared.StopBuildInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopBuildXAmzTargetEnum;
}
export declare class StopBuildResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopBuildOutput?: shared.StopBuildOutput;
}
