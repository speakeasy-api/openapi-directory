import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSecurityConfigsXAmzTargetEnum {
    OpenSearchServerlessListSecurityConfigs = "OpenSearchServerless.ListSecurityConfigs"
}
export declare class ListSecurityConfigsRequest extends SpeakeasyBase {
    listSecurityConfigsRequest: shared.ListSecurityConfigsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecurityConfigsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSecurityConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSecurityConfigsResponse?: shared.ListSecurityConfigsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
