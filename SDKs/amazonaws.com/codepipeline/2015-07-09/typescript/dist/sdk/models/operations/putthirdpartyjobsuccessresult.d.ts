import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutThirdPartyJobSuccessResultXAmzTargetEnum {
    CodePipeline20150709PutThirdPartyJobSuccessResult = "CodePipeline_20150709.PutThirdPartyJobSuccessResult"
}
export declare class PutThirdPartyJobSuccessResultRequest extends SpeakeasyBase {
    putThirdPartyJobSuccessResultInput: shared.PutThirdPartyJobSuccessResultInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutThirdPartyJobSuccessResultXAmzTargetEnum;
}
export declare class PutThirdPartyJobSuccessResultResponse extends SpeakeasyBase {
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
