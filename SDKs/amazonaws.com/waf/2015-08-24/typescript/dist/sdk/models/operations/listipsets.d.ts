import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListIPSetsXAmzTargetEnum {
    AWSWAF20150824ListIPSets = "AWSWAF_20150824.ListIPSets"
}
export declare class ListIPSetsRequest extends SpeakeasyBase {
    listIPSetsRequest: shared.ListIPSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIPSetsXAmzTargetEnum;
}
export declare class ListIPSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listIPSetsResponse?: shared.ListIPSetsResponse;
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
