import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWebACLForResourceXAmzTargetEnum {
    AWSWAFRegional20161128GetWebACLForResource = "AWSWAF_Regional_20161128.GetWebACLForResource"
}
export declare class GetWebACLForResourceRequest extends SpeakeasyBase {
    getWebACLForResourceRequest: shared.GetWebACLForResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWebACLForResourceXAmzTargetEnum;
}
export declare class GetWebACLForResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getWebACLForResourceResponse?: shared.GetWebACLForResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFUnavailableEntityException
     */
    wafUnavailableEntityException?: any;
}
