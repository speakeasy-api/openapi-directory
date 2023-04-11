import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDomainContactXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainContact = "Route53Domains_v20140515.UpdateDomainContact"
}
export declare class UpdateDomainContactRequest extends SpeakeasyBase {
    updateDomainContactRequest: shared.UpdateDomainContactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainContactXAmzTargetEnum;
}
export declare class UpdateDomainContactResponse extends SpeakeasyBase {
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
    updateDomainContactResponse?: shared.UpdateDomainContactResponse;
}
