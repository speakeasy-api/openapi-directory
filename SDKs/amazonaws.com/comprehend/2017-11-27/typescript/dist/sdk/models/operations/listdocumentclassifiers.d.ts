import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentClassifiersXAmzTargetEnum {
    Comprehend20171127ListDocumentClassifiers = "Comprehend_20171127.ListDocumentClassifiers"
}
export declare class ListDocumentClassifiersRequest extends SpeakeasyBase {
    listDocumentClassifiersRequest: shared.ListDocumentClassifiersRequest;
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
    xAmzTarget: ListDocumentClassifiersXAmzTargetEnum;
}
export declare class ListDocumentClassifiersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidFilterException
     */
    invalidFilterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDocumentClassifiersResponse?: shared.ListDocumentClassifiersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
