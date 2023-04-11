import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515ListTagsForDomain = "Route53Domains_v20140515.ListTagsForDomain"
}
export declare class ListTagsForDomainRequest extends SpeakeasyBase {
    listTagsForDomainRequest: shared.ListTagsForDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForDomainXAmzTargetEnum;
}
export declare class ListTagsForDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    listTagsForDomainResponse?: shared.ListTagsForDomainResponse;
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
}
