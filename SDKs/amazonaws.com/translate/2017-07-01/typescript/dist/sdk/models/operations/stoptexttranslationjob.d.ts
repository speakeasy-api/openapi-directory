import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTextTranslationJobXAmzTargetEnum {
    AWSShineFrontendService20170701StopTextTranslationJob = "AWSShineFrontendService_20170701.StopTextTranslationJob"
}
export declare class StopTextTranslationJobRequest extends SpeakeasyBase {
    stopTextTranslationJobRequest: shared.StopTextTranslationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTextTranslationJobXAmzTargetEnum;
}
export declare class StopTextTranslationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopTextTranslationJobResponse?: shared.StopTextTranslationJobResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
