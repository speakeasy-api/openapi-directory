import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourcesForWebACLXAmzTargetEnum {
    AWSWAFRegional20161128ListResourcesForWebACL = "AWSWAF_Regional_20161128.ListResourcesForWebACL"
}
export declare class ListResourcesForWebACLRequest extends SpeakeasyBase {
    listResourcesForWebACLRequest: shared.ListResourcesForWebACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesForWebACLXAmzTargetEnum;
}
export declare class ListResourcesForWebACLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listResourcesForWebACLResponse?: shared.ListResourcesForWebACLResponse;
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
}
