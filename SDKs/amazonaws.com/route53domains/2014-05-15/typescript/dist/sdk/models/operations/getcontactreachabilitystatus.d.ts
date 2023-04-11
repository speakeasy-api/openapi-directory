import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetContactReachabilityStatusXAmzTargetEnum {
    Route53DomainsV20140515GetContactReachabilityStatus = "Route53Domains_v20140515.GetContactReachabilityStatus"
}
export declare class GetContactReachabilityStatusRequest extends SpeakeasyBase {
    getContactReachabilityStatusRequest: shared.GetContactReachabilityStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactReachabilityStatusXAmzTargetEnum;
}
export declare class GetContactReachabilityStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getContactReachabilityStatusResponse?: shared.GetContactReachabilityStatusResponse;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * OperationLimitExceeded
     */
    operationLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
