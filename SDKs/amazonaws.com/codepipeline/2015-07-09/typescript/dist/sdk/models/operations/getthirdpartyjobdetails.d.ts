import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetThirdPartyJobDetailsXAmzTargetEnum {
    CodePipeline20150709GetThirdPartyJobDetails = "CodePipeline_20150709.GetThirdPartyJobDetails"
}
export declare class GetThirdPartyJobDetailsRequest extends SpeakeasyBase {
    getThirdPartyJobDetailsInput: shared.GetThirdPartyJobDetailsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetThirdPartyJobDetailsXAmzTargetEnum;
}
export declare class GetThirdPartyJobDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getThirdPartyJobDetailsOutput?: shared.GetThirdPartyJobDetailsOutput;
    /**
     * InvalidClientTokenException
     */
    invalidClientTokenException?: any;
    /**
     * InvalidJobException
     */
    invalidJobException?: any;
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
