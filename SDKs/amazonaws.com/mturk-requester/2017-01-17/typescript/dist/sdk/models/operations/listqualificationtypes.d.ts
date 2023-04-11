import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListQualificationTypesXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListQualificationTypes = "MTurkRequesterServiceV20170117.ListQualificationTypes"
}
export declare class ListQualificationTypesRequest extends SpeakeasyBase {
    listQualificationTypesRequest: shared.ListQualificationTypesRequest;
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
    xAmzTarget: ListQualificationTypesXAmzTargetEnum;
}
export declare class ListQualificationTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listQualificationTypesResponse?: shared.ListQualificationTypesResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
