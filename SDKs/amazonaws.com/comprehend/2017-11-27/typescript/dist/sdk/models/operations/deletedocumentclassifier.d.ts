import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDocumentClassifierXAmzTargetEnum {
    Comprehend20171127DeleteDocumentClassifier = "Comprehend_20171127.DeleteDocumentClassifier"
}
export declare class DeleteDocumentClassifierRequest extends SpeakeasyBase {
    deleteDocumentClassifierRequest: shared.DeleteDocumentClassifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDocumentClassifierXAmzTargetEnum;
}
export declare class DeleteDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDocumentClassifierResponse?: Record<string, any>;
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
