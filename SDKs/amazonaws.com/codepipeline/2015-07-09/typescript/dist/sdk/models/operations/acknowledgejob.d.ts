import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcknowledgeJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeJob = "CodePipeline_20150709.AcknowledgeJob"
}
export declare class AcknowledgeJobRequest extends SpeakeasyBase {
    acknowledgeJobInput: shared.AcknowledgeJobInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcknowledgeJobXAmzTargetEnum;
}
export declare class AcknowledgeJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acknowledgeJobOutput?: shared.AcknowledgeJobOutput;
    contentType: string;
    /**
     * InvalidNonceException
     */
    invalidNonceException?: any;
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
