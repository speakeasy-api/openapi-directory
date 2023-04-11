import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImageBuildersXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImageBuilders = "PhotonAdminProxyService.DescribeImageBuilders"
}
export declare class DescribeImageBuildersRequest extends SpeakeasyBase {
    describeImageBuildersRequest: shared.DescribeImageBuildersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageBuildersXAmzTargetEnum;
}
export declare class DescribeImageBuildersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImageBuildersResult?: shared.DescribeImageBuildersResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
