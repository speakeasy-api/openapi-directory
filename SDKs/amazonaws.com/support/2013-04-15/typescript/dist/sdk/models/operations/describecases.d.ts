import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCasesXAmzTargetEnum {
    AWSSupport20130415DescribeCases = "AWSSupport_20130415.DescribeCases"
}
export declare class DescribeCasesRequest extends SpeakeasyBase {
    describeCasesRequest: shared.DescribeCasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCasesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeCasesResponse extends SpeakeasyBase {
    /**
     * CaseIdNotFound
     */
    caseIdNotFound?: any;
    contentType: string;
    /**
     * Success
     */
    describeCasesResponse?: shared.DescribeCasesResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
