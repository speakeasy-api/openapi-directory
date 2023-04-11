import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOperationsXAmzTargetEnum {
    Route53DomainsV20140515ListOperations = "Route53Domains_v20140515.ListOperations"
}
export declare class ListOperationsRequest extends SpeakeasyBase {
    listOperationsRequest: shared.ListOperationsRequest;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOperationsXAmzTargetEnum;
}
export declare class ListOperationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
