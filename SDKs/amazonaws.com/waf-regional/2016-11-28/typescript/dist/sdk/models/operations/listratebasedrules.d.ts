import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRateBasedRulesXAmzTargetEnum {
    AWSWAFRegional20161128ListRateBasedRules = "AWSWAF_Regional_20161128.ListRateBasedRules"
}
export declare class ListRateBasedRulesRequest extends SpeakeasyBase {
    listRateBasedRulesRequest: shared.ListRateBasedRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRateBasedRulesXAmzTargetEnum;
}
export declare class ListRateBasedRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listRateBasedRulesResponse?: shared.ListRateBasedRulesResponse;
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
