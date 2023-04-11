import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515UpdateTagsForDomain = "Route53Domains_v20140515.UpdateTagsForDomain"
}
export declare class UpdateTagsForDomainRequest extends SpeakeasyBase {
    updateTagsForDomainRequest: shared.UpdateTagsForDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTagsForDomainXAmzTargetEnum;
}
export declare class UpdateTagsForDomainResponse extends SpeakeasyBase {
    contentType: string;
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
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
    /**
     * Success
     */
    updateTagsForDomainResponse?: Record<string, any>;
}
