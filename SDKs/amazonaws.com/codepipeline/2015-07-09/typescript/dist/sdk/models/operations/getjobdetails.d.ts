import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetJobDetailsXAmzTargetEnum {
    CodePipeline20150709GetJobDetails = "CodePipeline_20150709.GetJobDetails"
}
export declare class GetJobDetailsRequest extends SpeakeasyBase {
    getJobDetailsInput: shared.GetJobDetailsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobDetailsXAmzTargetEnum;
}
export declare class GetJobDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getJobDetailsOutput?: shared.GetJobDetailsOutput;
    /**
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
