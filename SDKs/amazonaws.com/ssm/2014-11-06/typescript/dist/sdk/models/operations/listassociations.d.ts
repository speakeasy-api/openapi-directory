import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssociationsXAmzTargetEnum {
    AmazonSSMListAssociations = "AmazonSSM.ListAssociations"
}
export declare class ListAssociationsRequest extends SpeakeasyBase {
    listAssociationsRequest: shared.ListAssociationsRequest;
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
    xAmzTarget: ListAssociationsXAmzTargetEnum;
}
export declare class ListAssociationsResponse extends SpeakeasyBase {
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
    listAssociationsResult?: shared.ListAssociationsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
