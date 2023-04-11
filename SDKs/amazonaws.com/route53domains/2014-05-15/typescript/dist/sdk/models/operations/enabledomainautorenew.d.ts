import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableDomainAutoRenewXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainAutoRenew = "Route53Domains_v20140515.EnableDomainAutoRenew"
}
export declare class EnableDomainAutoRenewRequest extends SpeakeasyBase {
    enableDomainAutoRenewRequest: shared.EnableDomainAutoRenewRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableDomainAutoRenewXAmzTargetEnum;
}
export declare class EnableDomainAutoRenewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableDomainAutoRenewResponse?: Record<string, any>;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TLDRulesViolation
     */
    tldRulesViolation?: any;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
