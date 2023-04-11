import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDirectoryConfigsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeDirectoryConfigs = "PhotonAdminProxyService.DescribeDirectoryConfigs"
}
export declare class DescribeDirectoryConfigsRequest extends SpeakeasyBase {
    describeDirectoryConfigsRequest: shared.DescribeDirectoryConfigsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectoryConfigsXAmzTargetEnum;
}
export declare class DescribeDirectoryConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDirectoryConfigsResult?: shared.DescribeDirectoryConfigsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
