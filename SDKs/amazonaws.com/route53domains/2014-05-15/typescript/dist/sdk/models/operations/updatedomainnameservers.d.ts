import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDomainNameserversXAmzTargetEnum {
    Route53DomainsV20140515UpdateDomainNameservers = "Route53Domains_v20140515.UpdateDomainNameservers"
}
export declare class UpdateDomainNameserversRequest extends SpeakeasyBase {
    updateDomainNameserversRequest: shared.UpdateDomainNameserversRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDomainNameserversXAmzTargetEnum;
}
export declare class UpdateDomainNameserversResponse extends SpeakeasyBase {
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
    updateDomainNameserversResponse?: shared.UpdateDomainNameserversResponse;
}
