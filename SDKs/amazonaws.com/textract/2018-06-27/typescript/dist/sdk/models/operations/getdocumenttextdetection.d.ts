import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDocumentTextDetectionXAmzTargetEnum {
    TextractGetDocumentTextDetection = "Textract.GetDocumentTextDetection"
}
export declare class GetDocumentTextDetectionRequest extends SpeakeasyBase {
    getDocumentTextDetectionRequest: shared.GetDocumentTextDetectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDocumentTextDetectionXAmzTargetEnum;
}
export declare class GetDocumentTextDetectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getDocumentTextDetectionResponse?: shared.GetDocumentTextDetectionResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidJobIdException
     */
    invalidJobIdException?: any;
    /**
     * InvalidKMSKeyException
     */
    invalidKMSKeyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidS3ObjectException
     */
    invalidS3ObjectException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
