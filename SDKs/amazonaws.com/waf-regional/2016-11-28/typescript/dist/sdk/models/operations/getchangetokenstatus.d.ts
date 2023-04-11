import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetChangeTokenStatusXAmzTargetEnum {
    AWSWAFRegional20161128GetChangeTokenStatus = "AWSWAF_Regional_20161128.GetChangeTokenStatus"
}
export declare class GetChangeTokenStatusRequest extends SpeakeasyBase {
    getChangeTokenStatusRequest: shared.GetChangeTokenStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetChangeTokenStatusXAmzTargetEnum;
}
export declare class GetChangeTokenStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getChangeTokenStatusResponse?: shared.GetChangeTokenStatusResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
