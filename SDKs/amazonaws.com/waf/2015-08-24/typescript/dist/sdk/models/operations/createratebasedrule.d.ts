import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRateBasedRuleXAmzTargetEnum {
    AWSWAF20150824CreateRateBasedRule = "AWSWAF_20150824.CreateRateBasedRule"
}
export declare class CreateRateBasedRuleRequest extends SpeakeasyBase {
    createRateBasedRuleRequest: shared.CreateRateBasedRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRateBasedRuleXAmzTargetEnum;
}
export declare class CreateRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRateBasedRuleResponse?: shared.CreateRateBasedRuleResponse;
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
