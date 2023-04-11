import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDocumentMetadataXAmzTargetEnum {
    AmazonSSMUpdateDocumentMetadata = "AmazonSSM.UpdateDocumentMetadata"
}
export declare class UpdateDocumentMetadataRequest extends SpeakeasyBase {
    updateDocumentMetadataRequest: shared.UpdateDocumentMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDocumentMetadataXAmzTargetEnum;
}
export declare class UpdateDocumentMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentOperation
     */
    invalidDocumentOperation?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDocumentMetadataResponse?: Record<string, any>;
}
