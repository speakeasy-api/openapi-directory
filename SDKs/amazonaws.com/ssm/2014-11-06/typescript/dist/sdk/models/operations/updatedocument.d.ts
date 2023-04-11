import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDocumentXAmzTargetEnum {
    AmazonSSMUpdateDocument = "AmazonSSM.UpdateDocument"
}
export declare class UpdateDocumentRequest extends SpeakeasyBase {
    updateDocumentRequest: shared.UpdateDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDocumentXAmzTargetEnum;
}
export declare class UpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentVersionLimitExceeded
     */
    documentVersionLimitExceeded?: any;
    /**
     * DuplicateDocumentContent
     */
    duplicateDocumentContent?: any;
    /**
     * DuplicateDocumentVersionName
     */
    duplicateDocumentVersionName?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentContent
     */
    invalidDocumentContent?: any;
    /**
     * InvalidDocumentOperation
     */
    invalidDocumentOperation?: any;
    /**
     * InvalidDocumentSchemaVersion
     */
    invalidDocumentSchemaVersion?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    /**
     * MaxDocumentSizeExceeded
     */
    maxDocumentSizeExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDocumentResult?: shared.UpdateDocumentResult;
}
