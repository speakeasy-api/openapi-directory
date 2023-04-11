import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAvailablePatchesXAmzTargetEnum {
    AmazonSSMDescribeAvailablePatches = "AmazonSSM.DescribeAvailablePatches"
}
export declare class DescribeAvailablePatchesRequest extends SpeakeasyBase {
    describeAvailablePatchesRequest: shared.DescribeAvailablePatchesRequest;
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
    xAmzTarget: DescribeAvailablePatchesXAmzTargetEnum;
}
export declare class DescribeAvailablePatchesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAvailablePatchesResult?: shared.DescribeAvailablePatchesResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
