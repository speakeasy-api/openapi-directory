import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateByteMatchSetXAmzTargetEnum {
    AWSWAF20150824CreateByteMatchSet = "AWSWAF_20150824.CreateByteMatchSet"
}
export declare class CreateByteMatchSetRequest extends SpeakeasyBase {
    createByteMatchSetRequest: shared.CreateByteMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateByteMatchSetXAmzTargetEnum;
}
export declare class CreateByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createByteMatchSetResponse?: shared.CreateByteMatchSetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFDisallowedNameException
     */
    wafDisallowedNameException?: any;
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
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
