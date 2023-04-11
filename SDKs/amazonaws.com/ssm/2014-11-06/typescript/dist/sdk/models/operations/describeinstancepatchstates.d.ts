import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstancePatchStatesXAmzTargetEnum {
    AmazonSSMDescribeInstancePatchStates = "AmazonSSM.DescribeInstancePatchStates"
}
export declare class DescribeInstancePatchStatesRequest extends SpeakeasyBase {
    describeInstancePatchStatesRequest: shared.DescribeInstancePatchStatesRequest;
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
    xAmzTarget: DescribeInstancePatchStatesXAmzTargetEnum;
}
export declare class DescribeInstancePatchStatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstancePatchStatesResult?: shared.DescribeInstancePatchStatesResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
