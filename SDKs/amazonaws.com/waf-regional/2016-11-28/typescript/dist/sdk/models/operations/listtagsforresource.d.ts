import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForResourceXAmzTargetEnum {
    AWSWAFRegional20161128ListTagsForResource = "AWSWAF_Regional_20161128.ListTagsForResource"
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    listTagsForResourceRequest: shared.ListTagsForResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFBadRequestException
     */
    wafBadRequestException?: any;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFTagOperationException
     */
    wafTagOperationException?: any;
    /**
     * WAFTagOperationInternalErrorException
     */
    wafTagOperationInternalErrorException?: any;
}
