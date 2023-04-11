import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDomainXAmzTargetEnum {
    Route53DomainsV20140515DeleteDomain = "Route53Domains_v20140515.DeleteDomain"
}
export declare class DeleteDomainRequest extends SpeakeasyBase {
    deleteDomainRequest: shared.DeleteDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDomainXAmzTargetEnum;
}
export declare class DeleteDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDomainResponse?: shared.DeleteDomainResponse;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
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
