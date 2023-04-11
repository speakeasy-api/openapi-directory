import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetIPSetXAmzTargetEnum {
    AWSWAFRegional20161128GetIPSet = "AWSWAF_Regional_20161128.GetIPSet"
}
export declare class GetIPSetRequest extends SpeakeasyBase {
    getIPSetRequest: shared.GetIPSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIPSetXAmzTargetEnum;
}
export declare class GetIPSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getIPSetResponse?: shared.GetIPSetResponse;
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
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
