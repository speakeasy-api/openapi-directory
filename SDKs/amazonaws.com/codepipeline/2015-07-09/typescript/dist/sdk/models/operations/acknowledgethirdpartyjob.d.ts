import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcknowledgeThirdPartyJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeThirdPartyJob = "CodePipeline_20150709.AcknowledgeThirdPartyJob"
}
export declare class AcknowledgeThirdPartyJobRequest extends SpeakeasyBase {
    acknowledgeThirdPartyJobInput: shared.AcknowledgeThirdPartyJobInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcknowledgeThirdPartyJobXAmzTargetEnum;
}
export declare class AcknowledgeThirdPartyJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acknowledgeThirdPartyJobOutput?: shared.AcknowledgeThirdPartyJobOutput;
    contentType: string;
    /**
     * InvalidClientTokenException
     */
    invalidClientTokenException?: any;
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
