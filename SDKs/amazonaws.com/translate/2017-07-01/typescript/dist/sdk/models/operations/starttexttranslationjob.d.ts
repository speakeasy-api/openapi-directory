import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTextTranslationJobXAmzTargetEnum {
    AWSShineFrontendService20170701StartTextTranslationJob = "AWSShineFrontendService_20170701.StartTextTranslationJob"
}
export declare class StartTextTranslationJobRequest extends SpeakeasyBase {
    startTextTranslationJobRequest: shared.StartTextTranslationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTextTranslationJobXAmzTargetEnum;
}
export declare class StartTextTranslationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startTextTranslationJobResponse?: shared.StartTextTranslationJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedLanguagePairException
     */
    unsupportedLanguagePairException?: any;
}
