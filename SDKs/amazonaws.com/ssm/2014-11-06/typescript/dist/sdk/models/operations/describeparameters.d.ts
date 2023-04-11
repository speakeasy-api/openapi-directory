import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeParametersXAmzTargetEnum {
    AmazonSSMDescribeParameters = "AmazonSSM.DescribeParameters"
}
export declare class DescribeParametersRequest extends SpeakeasyBase {
    describeParametersRequest: shared.DescribeParametersRequest;
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
    xAmzTarget: DescribeParametersXAmzTargetEnum;
}
export declare class DescribeParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeParametersResult?: shared.DescribeParametersResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidFilterOption
     */
    invalidFilterOption?: any;
    /**
     * InvalidFilterValue
     */
    invalidFilterValue?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
