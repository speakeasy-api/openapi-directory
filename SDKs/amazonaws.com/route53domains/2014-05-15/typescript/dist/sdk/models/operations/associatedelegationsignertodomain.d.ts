import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateDelegationSignerToDomainXAmzTargetEnum {
    Route53DomainsV20140515AssociateDelegationSignerToDomain = "Route53Domains_v20140515.AssociateDelegationSignerToDomain"
}
export declare class AssociateDelegationSignerToDomainRequest extends SpeakeasyBase {
    associateDelegationSignerToDomainRequest: shared.AssociateDelegationSignerToDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDelegationSignerToDomainXAmzTargetEnum;
}
export declare class AssociateDelegationSignerToDomainResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateDelegationSignerToDomainResponse?: shared.AssociateDelegationSignerToDomainResponse;
    contentType: string;
    /**
     * DnssecLimitExceeded
     */
    dnssecLimitExceeded?: any;
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
