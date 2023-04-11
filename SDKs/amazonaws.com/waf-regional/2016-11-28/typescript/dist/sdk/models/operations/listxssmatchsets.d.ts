import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListXssMatchSetsXAmzTargetEnum {
    AWSWAFRegional20161128ListXssMatchSets = "AWSWAF_Regional_20161128.ListXssMatchSets"
}
export declare class ListXssMatchSetsRequest extends SpeakeasyBase {
    listXssMatchSetsRequest: shared.ListXssMatchSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListXssMatchSetsXAmzTargetEnum;
}
export declare class ListXssMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listXssMatchSetsResponse?: shared.ListXssMatchSetsResponse;
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
