import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRuleXAmzTargetEnum {
    AWSWAF20150824CreateRule = "AWSWAF_20150824.CreateRule"
}
export declare class CreateRuleRequest extends SpeakeasyBase {
    createRuleRequest: shared.CreateRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRuleXAmzTargetEnum;
}
export declare class CreateRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRuleResponse?: shared.CreateRuleResponse;
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
