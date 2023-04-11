import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResendContactReachabilityEmailXAmzTargetEnum {
    Route53DomainsV20140515ResendContactReachabilityEmail = "Route53Domains_v20140515.ResendContactReachabilityEmail"
}
export declare class ResendContactReachabilityEmailRequest extends SpeakeasyBase {
    resendContactReachabilityEmailRequest: shared.ResendContactReachabilityEmailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendContactReachabilityEmailXAmzTargetEnum;
}
export declare class ResendContactReachabilityEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * OperationLimitExceeded
     */
    operationLimitExceeded?: any;
    /**
     * Success
     */
    resendContactReachabilityEmailResponse?: shared.ResendContactReachabilityEmailResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
