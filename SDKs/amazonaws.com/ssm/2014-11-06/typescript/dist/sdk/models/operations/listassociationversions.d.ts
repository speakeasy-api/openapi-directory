import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssociationVersionsXAmzTargetEnum {
    AmazonSSMListAssociationVersions = "AmazonSSM.ListAssociationVersions"
}
export declare class ListAssociationVersionsRequest extends SpeakeasyBase {
    listAssociationVersionsRequest: shared.ListAssociationVersionsRequest;
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
    xAmzTarget: ListAssociationVersionsXAmzTargetEnum;
}
export declare class ListAssociationVersionsResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listAssociationVersionsResult?: shared.ListAssociationVersionsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
