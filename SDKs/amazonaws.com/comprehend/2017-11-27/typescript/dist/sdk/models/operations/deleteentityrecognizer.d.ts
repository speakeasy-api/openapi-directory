import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEntityRecognizerXAmzTargetEnum {
    Comprehend20171127DeleteEntityRecognizer = "Comprehend_20171127.DeleteEntityRecognizer"
}
export declare class DeleteEntityRecognizerRequest extends SpeakeasyBase {
    deleteEntityRecognizerRequest: shared.DeleteEntityRecognizerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEntityRecognizerXAmzTargetEnum;
}
export declare class DeleteEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEntityRecognizerResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
