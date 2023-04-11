import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableDomainAutoRenewXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainAutoRenew = "Route53Domains_v20140515.DisableDomainAutoRenew"
}
export declare class DisableDomainAutoRenewRequest extends SpeakeasyBase {
    disableDomainAutoRenewRequest: shared.DisableDomainAutoRenewRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableDomainAutoRenewXAmzTargetEnum;
}
export declare class DisableDomainAutoRenewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableDomainAutoRenewResponse?: Record<string, any>;
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
