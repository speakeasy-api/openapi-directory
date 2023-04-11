import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateByteMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128UpdateByteMatchSet = "AWSWAF_Regional_20161128.UpdateByteMatchSet"
}
export declare class UpdateByteMatchSetRequest extends SpeakeasyBase {
    updateByteMatchSetRequest: shared.UpdateByteMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateByteMatchSetXAmzTargetEnum;
}
export declare class UpdateByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateByteMatchSetResponse?: shared.UpdateByteMatchSetResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFInvalidOperationException
     */
    wafInvalidOperationException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFNonexistentContainerException
     */
    wafNonexistentContainerException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
