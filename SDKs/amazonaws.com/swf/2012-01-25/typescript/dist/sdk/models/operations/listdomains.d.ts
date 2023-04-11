import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDomainsXAmzTargetEnum {
    SimpleWorkflowServiceListDomains = "SimpleWorkflowService.ListDomains"
}
export declare class ListDomainsRequest extends SpeakeasyBase {
    listDomainsInput: shared.ListDomainsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDomainsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    domainInfos?: shared.DomainInfos;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
