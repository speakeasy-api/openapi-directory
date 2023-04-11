import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstancePatchesXAmzTargetEnum {
    AmazonSSMDescribeInstancePatches = "AmazonSSM.DescribeInstancePatches"
}
export declare class DescribeInstancePatchesRequest extends SpeakeasyBase {
    describeInstancePatchesRequest: shared.DescribeInstancePatchesRequest;
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
    xAmzTarget: DescribeInstancePatchesXAmzTargetEnum;
}
export declare class DescribeInstancePatchesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstancePatchesResult?: shared.DescribeInstancePatchesResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
