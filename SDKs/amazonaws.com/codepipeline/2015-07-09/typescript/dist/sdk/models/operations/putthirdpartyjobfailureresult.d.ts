import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutThirdPartyJobFailureResultXAmzTargetEnum {
    CodePipeline20150709PutThirdPartyJobFailureResult = "CodePipeline_20150709.PutThirdPartyJobFailureResult"
}
export declare class PutThirdPartyJobFailureResultRequest extends SpeakeasyBase {
    putThirdPartyJobFailureResultInput: shared.PutThirdPartyJobFailureResultInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutThirdPartyJobFailureResultXAmzTargetEnum;
}
export declare class PutThirdPartyJobFailureResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidClientTokenException
     */
    invalidClientTokenException?: any;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
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
