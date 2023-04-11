import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEntityRecognizerXAmzTargetEnum {
    Comprehend20171127CreateEntityRecognizer = "Comprehend_20171127.CreateEntityRecognizer"
}
export declare class CreateEntityRecognizerRequest extends SpeakeasyBase {
    createEntityRecognizerRequest: shared.CreateEntityRecognizerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEntityRecognizerXAmzTargetEnum;
}
export declare class CreateEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEntityRecognizerResponse?: shared.CreateEntityRecognizerResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * KmsKeyValidationException
     */
    kmsKeyValidationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * UnsupportedLanguageException
     */
    unsupportedLanguageException?: any;
}
