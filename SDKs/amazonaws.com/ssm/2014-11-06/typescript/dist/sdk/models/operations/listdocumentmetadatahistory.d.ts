import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentMetadataHistoryXAmzTargetEnum {
    AmazonSSMListDocumentMetadataHistory = "AmazonSSM.ListDocumentMetadataHistory"
}
export declare class ListDocumentMetadataHistoryRequest extends SpeakeasyBase {
    listDocumentMetadataHistoryRequest: shared.ListDocumentMetadataHistoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentMetadataHistoryXAmzTargetEnum;
}
export declare class ListDocumentMetadataHistoryResponse extends SpeakeasyBase {
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
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listDocumentMetadataHistoryResponse?: shared.ListDocumentMetadataHistoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
