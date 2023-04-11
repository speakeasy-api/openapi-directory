import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHITsForQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListHITsForQualificationType = "MTurkRequesterServiceV20170117.ListHITsForQualificationType"
}
export declare class ListHITsForQualificationTypeRequest extends SpeakeasyBase {
    listHITsForQualificationTypeRequest: shared.ListHITsForQualificationTypeRequest;
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
    xAmzTarget: ListHITsForQualificationTypeXAmzTargetEnum;
}
export declare class ListHITsForQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHITsForQualificationTypeResponse?: shared.ListHITsForQualificationTypeResponse;
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
