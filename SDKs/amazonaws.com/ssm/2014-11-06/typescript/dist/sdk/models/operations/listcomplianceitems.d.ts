import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListComplianceItemsXAmzTargetEnum {
    AmazonSSMListComplianceItems = "AmazonSSM.ListComplianceItems"
}
export declare class ListComplianceItemsRequest extends SpeakeasyBase {
    listComplianceItemsRequest: shared.ListComplianceItemsRequest;
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
    xAmzTarget: ListComplianceItemsXAmzTargetEnum;
}
export declare class ListComplianceItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * InvalidResourceId
     */
    invalidResourceId?: any;
    /**
     * InvalidResourceType
     */
    invalidResourceType?: any;
    /**
     * Success
     */
    listComplianceItemsResult?: shared.ListComplianceItemsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
