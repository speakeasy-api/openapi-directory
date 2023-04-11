import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentsXAmzTargetEnum {
    AmazonSSMListDocuments = "AmazonSSM.ListDocuments"
}
export declare class ListDocumentsRequest extends SpeakeasyBase {
    listDocumentsRequest: shared.ListDocumentsRequest;
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
    xAmzTarget: ListDocumentsXAmzTargetEnum;
}
export declare class ListDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listDocumentsResult?: shared.ListDocumentsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
