import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNamespacesXAmzTargetEnum {
    Route53AutoNamingV20170314ListNamespaces = "Route53AutoNaming_v20170314.ListNamespaces"
}
export declare class ListNamespacesRequest extends SpeakeasyBase {
    listNamespacesRequest: shared.ListNamespacesRequest;
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
    xAmzTarget: ListNamespacesXAmzTargetEnum;
}
export declare class ListNamespacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    listNamespacesResponse?: shared.ListNamespacesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
