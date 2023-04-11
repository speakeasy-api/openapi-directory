import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDomainContactPrivacyXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainContactPrivacy = "Route53Domains_v20140515.UpdateDomainContactPrivacy"
}
export declare class UpdateDomainContactPrivacyRequest extends SpeakeasyBase {
    updateDomainContactPrivacyRequest: shared.UpdateDomainContactPrivacyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainContactPrivacyXAmzTargetEnum;
}
export declare class UpdateDomainContactPrivacyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
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
     * TLDRulesViolation
     */
    tldRulesViolation?: any;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
    /**
     * Success
     */
    updateDomainContactPrivacyResponse?: shared.UpdateDomainContactPrivacyResponse;
}
