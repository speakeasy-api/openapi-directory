import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRulesXAmzTargetEnum {
    AWSWAFRegional20161128ListRules = "AWSWAF_Regional_20161128.ListRules"
}
export declare class ListRulesRequest extends SpeakeasyBase {
    listRulesRequest: shared.ListRulesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRulesXAmzTargetEnum;
}
export declare class ListRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listRulesResponse?: shared.ListRulesResponse;
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
