import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOpsItemRelatedItemsXAmzTargetEnum {
    AmazonSSMListOpsItemRelatedItems = "AmazonSSM.ListOpsItemRelatedItems"
}
export declare class ListOpsItemRelatedItemsRequest extends SpeakeasyBase {
    listOpsItemRelatedItemsRequest: shared.ListOpsItemRelatedItemsRequest;
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
    xAmzTarget: ListOpsItemRelatedItemsXAmzTargetEnum;
}
export declare class ListOpsItemRelatedItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listOpsItemRelatedItemsResponse?: shared.ListOpsItemRelatedItemsResponse;
    /**
     * OpsItemInvalidParameterException
     */
    opsItemInvalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
