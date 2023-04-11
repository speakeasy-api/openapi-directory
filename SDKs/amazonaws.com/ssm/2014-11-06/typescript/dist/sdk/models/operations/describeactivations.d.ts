import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeActivationsXAmzTargetEnum {
    AmazonSSMDescribeActivations = "AmazonSSM.DescribeActivations"
}
export declare class DescribeActivationsRequest extends SpeakeasyBase {
    describeActivationsRequest: shared.DescribeActivationsRequest;
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
    xAmzTarget: DescribeActivationsXAmzTargetEnum;
}
export declare class DescribeActivationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeActivationsResult?: shared.DescribeActivationsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
