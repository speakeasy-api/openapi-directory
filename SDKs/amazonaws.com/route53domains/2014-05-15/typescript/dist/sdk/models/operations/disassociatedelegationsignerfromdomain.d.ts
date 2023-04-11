import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateDelegationSignerFromDomainXAmzTargetEnum {
    Route53DomainsV20140515DisassociateDelegationSignerFromDomain = "Route53Domains_v20140515.DisassociateDelegationSignerFromDomain"
}
export declare class DisassociateDelegationSignerFromDomainRequest extends SpeakeasyBase {
    disassociateDelegationSignerFromDomainRequest: shared.DisassociateDelegationSignerFromDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDelegationSignerFromDomainXAmzTargetEnum;
}
export declare class DisassociateDelegationSignerFromDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateDelegationSignerFromDomainResponse?: shared.DisassociateDelegationSignerFromDomainResponse;
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
}
