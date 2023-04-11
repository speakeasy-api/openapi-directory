import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDomainsXAmzTargetEnum {
    SageMakerListDomains = "SageMaker.ListDomains"
}
export declare class ListDomainsRequest extends SpeakeasyBase {
    listDomainsRequest: shared.ListDomainsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDomainsXAmzTargetEnum;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
