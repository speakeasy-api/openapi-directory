import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CheckDomainAvailabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainAvailability = "Route53Domains_v20140515.CheckDomainAvailability"
}
export declare class CheckDomainAvailabilityRequest extends SpeakeasyBase {
    checkDomainAvailabilityRequest: shared.CheckDomainAvailabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckDomainAvailabilityXAmzTargetEnum;
}
export declare class CheckDomainAvailabilityResponse extends SpeakeasyBase {
    /**
     * Success
     */
    checkDomainAvailabilityResponse?: shared.CheckDomainAvailabilityResponse;
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
