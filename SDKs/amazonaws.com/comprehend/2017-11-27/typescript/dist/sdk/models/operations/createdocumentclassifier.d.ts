import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDocumentClassifierXAmzTargetEnum {
    Comprehend20171127CreateDocumentClassifier = "Comprehend_20171127.CreateDocumentClassifier"
}
export declare class CreateDocumentClassifierRequest extends SpeakeasyBase {
    createDocumentClassifierRequest: shared.CreateDocumentClassifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDocumentClassifierXAmzTargetEnum;
}
export declare class CreateDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDocumentClassifierResponse?: shared.CreateDocumentClassifierResponse;
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
