import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCommunicationsXAmzTargetEnum {
    AWSSupport20130415DescribeCommunications = "AWSSupport_20130415.DescribeCommunications"
}
export declare class DescribeCommunicationsRequest extends SpeakeasyBase {
    describeCommunicationsRequest: shared.DescribeCommunicationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCommunicationsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeCommunicationsResponse extends SpeakeasyBase {
    /**
     * CaseIdNotFound
     */
    caseIdNotFound?: any;
    contentType: string;
    /**
     * Success
     */
    describeCommunicationsResponse?: shared.DescribeCommunicationsResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
