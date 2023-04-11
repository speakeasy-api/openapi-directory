import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportModelXAmzTargetEnum {
    Comprehend20171127ImportModel = "Comprehend_20171127.ImportModel"
}
export declare class ImportModelRequest extends SpeakeasyBase {
    importModelRequest: shared.ImportModelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportModelXAmzTargetEnum;
}
export declare class ImportModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importModelResponse?: shared.ImportModelResponse;
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
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
