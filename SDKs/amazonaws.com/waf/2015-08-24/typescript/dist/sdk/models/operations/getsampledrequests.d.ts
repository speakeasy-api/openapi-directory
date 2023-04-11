import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSampledRequestsXAmzTargetEnum {
    AWSWAF20150824GetSampledRequests = "AWSWAF_20150824.GetSampledRequests"
}
export declare class GetSampledRequestsRequest extends SpeakeasyBase {
    getSampledRequestsRequest: shared.GetSampledRequestsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSampledRequestsXAmzTargetEnum;
}
export declare class GetSampledRequestsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSampledRequestsResponse?: shared.GetSampledRequestsResponse;
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
