import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEcsClustersXAmzTargetEnum {
    OpsWorks20130218DescribeEcsClusters = "OpsWorks_20130218.DescribeEcsClusters"
}
export declare class DescribeEcsClustersRequest extends SpeakeasyBase {
    describeEcsClustersRequest: shared.DescribeEcsClustersRequest;
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
    xAmzTarget: DescribeEcsClustersXAmzTargetEnum;
}
export declare class DescribeEcsClustersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEcsClustersResult?: shared.DescribeEcsClustersResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
