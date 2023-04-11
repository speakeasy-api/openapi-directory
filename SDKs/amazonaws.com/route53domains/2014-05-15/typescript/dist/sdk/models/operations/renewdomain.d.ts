import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RenewDomainXAmzTargetEnum {
    Route53DomainsV20140515RenewDomain = "Route53Domains_v20140515.RenewDomain"
}
export declare class RenewDomainRequest extends SpeakeasyBase {
    renewDomainRequest: shared.RenewDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenewDomainXAmzTargetEnum;
}
export declare class RenewDomainResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    renewDomainResponse?: shared.RenewDomainResponse;
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
