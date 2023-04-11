import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetByteMatchSetXAmzTargetEnum {
    AWSWAF20150824GetByteMatchSet = "AWSWAF_20150824.GetByteMatchSet"
}
export declare class GetByteMatchSetRequest extends SpeakeasyBase {
    getByteMatchSetRequest: shared.GetByteMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetByteMatchSetXAmzTargetEnum;
}
export declare class GetByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getByteMatchSetResponse?: shared.GetByteMatchSetResponse;
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
