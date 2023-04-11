import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRateBasedRuleManagedKeysXAmzTargetEnum {
    AWSWAF20150824GetRateBasedRuleManagedKeys = "AWSWAF_20150824.GetRateBasedRuleManagedKeys"
}
export declare class GetRateBasedRuleManagedKeysRequest extends SpeakeasyBase {
    getRateBasedRuleManagedKeysRequest: shared.GetRateBasedRuleManagedKeysRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRateBasedRuleManagedKeysXAmzTargetEnum;
}
export declare class GetRateBasedRuleManagedKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRateBasedRuleManagedKeysResponse?: shared.GetRateBasedRuleManagedKeysResponse;
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
