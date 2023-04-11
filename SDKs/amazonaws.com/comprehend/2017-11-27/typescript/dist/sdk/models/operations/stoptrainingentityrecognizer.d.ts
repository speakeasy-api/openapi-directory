import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTrainingEntityRecognizerXAmzTargetEnum {
    Comprehend20171127StopTrainingEntityRecognizer = "Comprehend_20171127.StopTrainingEntityRecognizer"
}
export declare class StopTrainingEntityRecognizerRequest extends SpeakeasyBase {
    stopTrainingEntityRecognizerRequest: shared.StopTrainingEntityRecognizerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTrainingEntityRecognizerXAmzTargetEnum;
}
export declare class StopTrainingEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopTrainingEntityRecognizerResponse?: Record<string, any>;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
