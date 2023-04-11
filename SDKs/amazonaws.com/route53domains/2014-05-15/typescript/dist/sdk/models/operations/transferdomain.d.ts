import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TransferDomainXAmzTargetEnum {
    Route53DomainsV20140515TransferDomain = "Route53Domains_v20140515.TransferDomain"
}
export declare class TransferDomainRequest extends SpeakeasyBase {
    transferDomainRequest: shared.TransferDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransferDomainXAmzTargetEnum;
}
export declare class TransferDomainResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TLDRulesViolation
     */
    tldRulesViolation?: any;
    /**
     * Success
     */
    transferDomainResponse?: shared.TransferDomainResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
