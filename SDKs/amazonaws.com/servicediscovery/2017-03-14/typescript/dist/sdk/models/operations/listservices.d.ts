import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServicesXAmzTargetEnum {
    Route53AutoNamingV20170314ListServices = "Route53AutoNaming_v20170314.ListServices"
}
export declare class ListServicesRequest extends SpeakeasyBase {
    listServicesRequest: shared.ListServicesRequest;
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
    xAmzTarget: ListServicesXAmzTargetEnum;
}
export declare class ListServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
