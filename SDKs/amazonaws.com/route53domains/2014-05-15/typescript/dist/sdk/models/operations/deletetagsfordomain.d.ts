import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTagsForDomainXAmzTargetEnum {
    Route53DomainsV20140515DeleteTagsForDomain = "Route53Domains_v20140515.DeleteTagsForDomain"
}
export declare class DeleteTagsForDomainRequest extends SpeakeasyBase {
    deleteTagsForDomainRequest: shared.DeleteTagsForDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsForDomainXAmzTargetEnum;
}
export declare class DeleteTagsForDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTagsForDomainResponse?: Record<string, any>;
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
}
