import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSqlInjectionMatchSetsXAmzTargetEnum {
    AWSWAF20150824ListSqlInjectionMatchSets = "AWSWAF_20150824.ListSqlInjectionMatchSets"
}
export declare class ListSqlInjectionMatchSetsRequest extends SpeakeasyBase {
    listSqlInjectionMatchSetsRequest: shared.ListSqlInjectionMatchSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSqlInjectionMatchSetsXAmzTargetEnum;
}
export declare class ListSqlInjectionMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSqlInjectionMatchSetsResponse?: shared.ListSqlInjectionMatchSetsResponse;
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
