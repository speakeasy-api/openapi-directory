import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterDomainXAmzTargetEnum {
    Route53DomainsV20140515RegisterDomain = "Route53Domains_v20140515.RegisterDomain"
}
export declare class RegisterDomainRequest extends SpeakeasyBase {
    registerDomainRequest: shared.RegisterDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDomainXAmzTargetEnum;
}
export declare class RegisterDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DomainLimitExceeded
     */
    domainLimitExceeded?: any;
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
    registerDomainResponse?: shared.RegisterDomainResponse;
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
