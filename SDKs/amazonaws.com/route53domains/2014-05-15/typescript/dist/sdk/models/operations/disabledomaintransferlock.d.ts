import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainTransferLock = "Route53Domains_v20140515.DisableDomainTransferLock"
}
export declare class DisableDomainTransferLockRequest extends SpeakeasyBase {
    disableDomainTransferLockRequest: shared.DisableDomainTransferLockRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableDomainTransferLockXAmzTargetEnum;
}
export declare class DisableDomainTransferLockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableDomainTransferLockResponse?: shared.DisableDomainTransferLockResponse;
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
