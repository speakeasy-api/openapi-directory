import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTagValuesXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126GetTagValues = "ResourceGroupsTaggingAPI_20170126.GetTagValues"
}
export declare class GetTagValuesRequest extends SpeakeasyBase {
    getTagValuesInput: shared.GetTagValuesInput;
    /**
     * Pagination token
     */
    paginationToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTagValuesXAmzTargetEnum;
}
export declare class GetTagValuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTagValuesOutput?: shared.GetTagValuesOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * PaginationTokenExpiredException
     */
    paginationTokenExpiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
