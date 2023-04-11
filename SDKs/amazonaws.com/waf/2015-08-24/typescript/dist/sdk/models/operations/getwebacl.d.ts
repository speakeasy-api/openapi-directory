import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWebACLXAmzTargetEnum {
    AWSWAF20150824GetWebACL = "AWSWAF_20150824.GetWebACL"
}
export declare class GetWebACLRequest extends SpeakeasyBase {
    getWebACLRequest: shared.GetWebACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWebACLXAmzTargetEnum;
}
export declare class GetWebACLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getWebACLResponse?: shared.GetWebACLResponse;
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
