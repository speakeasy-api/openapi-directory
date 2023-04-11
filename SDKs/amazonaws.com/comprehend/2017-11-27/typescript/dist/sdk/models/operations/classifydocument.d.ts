import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ClassifyDocumentXAmzTargetEnum {
    Comprehend20171127ClassifyDocument = "Comprehend_20171127.ClassifyDocument"
}
export declare class ClassifyDocumentRequest extends SpeakeasyBase {
    classifyDocumentRequest: shared.ClassifyDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ClassifyDocumentXAmzTargetEnum;
}
export declare class ClassifyDocumentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    classifyDocumentResponse?: shared.ClassifyDocumentResponse;
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
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    /**
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
}
