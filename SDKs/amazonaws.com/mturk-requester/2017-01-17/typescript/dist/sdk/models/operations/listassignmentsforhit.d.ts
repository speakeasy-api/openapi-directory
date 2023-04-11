import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAssignmentsForHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListAssignmentsForHIT = "MTurkRequesterServiceV20170117.ListAssignmentsForHIT"
}
export declare class ListAssignmentsForHITRequest extends SpeakeasyBase {
    listAssignmentsForHITRequest: shared.ListAssignmentsForHITRequest;
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
    xAmzTarget: ListAssignmentsForHITXAmzTargetEnum;
}
export declare class ListAssignmentsForHITResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAssignmentsForHITResponse?: shared.ListAssignmentsForHITResponse;
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
