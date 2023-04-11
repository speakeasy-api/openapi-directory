import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImagePermissions = "PhotonAdminProxyService.DescribeImagePermissions"
}
export declare class DescribeImagePermissionsRequest extends SpeakeasyBase {
    describeImagePermissionsRequest: shared.DescribeImagePermissionsRequest;
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
    xAmzTarget: DescribeImagePermissionsXAmzTargetEnum;
}
export declare class DescribeImagePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImagePermissionsResult?: shared.DescribeImagePermissionsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
