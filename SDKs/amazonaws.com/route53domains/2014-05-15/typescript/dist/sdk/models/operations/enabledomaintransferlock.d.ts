import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainTransferLock = "Route53Domains_v20140515.EnableDomainTransferLock"
}
export declare class EnableDomainTransferLockRequest extends SpeakeasyBase {
    enableDomainTransferLockRequest: shared.EnableDomainTransferLockRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableDomainTransferLockXAmzTargetEnum;
}
export declare class EnableDomainTransferLockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
    /**
     * Success
     */
    enableDomainTransferLockResponse?: shared.EnableDomainTransferLockResponse;
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
