import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSizeConstraintSetsXAmzTargetEnum {
    AWSWAFRegional20161128ListSizeConstraintSets = "AWSWAF_Regional_20161128.ListSizeConstraintSets"
}
export declare class ListSizeConstraintSetsRequest extends SpeakeasyBase {
    listSizeConstraintSetsRequest: shared.ListSizeConstraintSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSizeConstraintSetsXAmzTargetEnum;
}
export declare class ListSizeConstraintSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSizeConstraintSetsResponse?: shared.ListSizeConstraintSetsResponse;
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
