import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentVersionsXAmzTargetEnum {
    AmazonSSMListDocumentVersions = "AmazonSSM.ListDocumentVersions"
}
export declare class ListDocumentVersionsRequest extends SpeakeasyBase {
    listDocumentVersionsRequest: shared.ListDocumentVersionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentVersionsXAmzTargetEnum;
}
export declare class ListDocumentVersionsResponse extends SpeakeasyBase {
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
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listDocumentVersionsResult?: shared.ListDocumentVersionsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
