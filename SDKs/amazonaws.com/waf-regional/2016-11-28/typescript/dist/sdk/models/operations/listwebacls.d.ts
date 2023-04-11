import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWebACLsXAmzTargetEnum {
    AWSWAFRegional20161128ListWebACLs = "AWSWAF_Regional_20161128.ListWebACLs"
}
export declare class ListWebACLsRequest extends SpeakeasyBase {
    listWebACLsRequest: shared.ListWebACLsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWebACLsXAmzTargetEnum;
}
export declare class ListWebACLsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWebACLsResponse?: shared.ListWebACLsResponse;
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
}
