import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum {
    AmazonSSMDescribeInstancePatchStatesForPatchGroup = "AmazonSSM.DescribeInstancePatchStatesForPatchGroup"
}
export declare class DescribeInstancePatchStatesForPatchGroupRequest extends SpeakeasyBase {
    describeInstancePatchStatesForPatchGroupRequest: shared.DescribeInstancePatchStatesForPatchGroupRequest;
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
    xAmzTarget: DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum;
}
export declare class DescribeInstancePatchStatesForPatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstancePatchStatesForPatchGroupResult?: shared.DescribeInstancePatchStatesForPatchGroupResult;
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
