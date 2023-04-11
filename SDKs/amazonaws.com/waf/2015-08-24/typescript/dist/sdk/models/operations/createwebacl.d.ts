import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWebACLXAmzTargetEnum {
    AWSWAF20150824CreateWebACL = "AWSWAF_20150824.CreateWebACL"
}
export declare class CreateWebACLRequest extends SpeakeasyBase {
    createWebACLRequest: shared.CreateWebACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWebACLXAmzTargetEnum;
}
export declare class CreateWebACLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWebACLResponse?: shared.CreateWebACLResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFBadRequestException
     */
    wafBadRequestException?: any;
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
    /**
     * WAFTagOperationException
     */
    wafTagOperationException?: any;
    /**
     * WAFTagOperationInternalErrorException
     */
    wafTagOperationInternalErrorException?: any;
}
