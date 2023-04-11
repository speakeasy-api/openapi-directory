import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWorkersWithQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListWorkersWithQualificationType = "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType"
}
export declare class ListWorkersWithQualificationTypeRequest extends SpeakeasyBase {
    listWorkersWithQualificationTypeRequest: shared.ListWorkersWithQualificationTypeRequest;
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
    xAmzTarget: ListWorkersWithQualificationTypeXAmzTargetEnum;
}
export declare class ListWorkersWithQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWorkersWithQualificationTypeResponse?: shared.ListWorkersWithQualificationTypeResponse;
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
