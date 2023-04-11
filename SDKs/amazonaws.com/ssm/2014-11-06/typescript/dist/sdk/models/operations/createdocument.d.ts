import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDocumentXAmzTargetEnum {
    AmazonSSMCreateDocument = "AmazonSSM.CreateDocument"
}
export declare class CreateDocumentRequest extends SpeakeasyBase {
    createDocumentRequest: shared.CreateDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDocumentXAmzTargetEnum;
}
export declare class CreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDocumentResult?: shared.CreateDocumentResult;
    /**
     * DocumentAlreadyExists
     */
    documentAlreadyExists?: any;
    /**
     * DocumentLimitExceeded
     */
    documentLimitExceeded?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocumentContent
     */
    invalidDocumentContent?: any;
    /**
     * InvalidDocumentSchemaVersion
     */
    invalidDocumentSchemaVersion?: any;
    /**
     * MaxDocumentSizeExceeded
     */
    maxDocumentSizeExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
