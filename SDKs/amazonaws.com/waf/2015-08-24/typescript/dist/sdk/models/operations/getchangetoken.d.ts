import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetChangeTokenXAmzTargetEnum {
    AWSWAF20150824GetChangeToken = "AWSWAF_20150824.GetChangeToken"
}
export declare class GetChangeTokenRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetChangeTokenXAmzTargetEnum;
}
export declare class GetChangeTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getChangeTokenResponse?: shared.GetChangeTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
}
