import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClusterXAmzTargetEnum {
    AWSIESnowballJobManagementServiceDescribeCluster = "AWSIESnowballJobManagementService.DescribeCluster"
}
export declare class DescribeClusterRequest extends SpeakeasyBase {
    describeClusterRequest: shared.DescribeClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClusterXAmzTargetEnum;
}
export declare class DescribeClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeClusterResult?: shared.DescribeClusterResult;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
