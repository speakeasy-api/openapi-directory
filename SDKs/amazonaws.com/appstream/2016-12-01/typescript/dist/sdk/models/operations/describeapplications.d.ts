import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApplicationsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeApplications = "PhotonAdminProxyService.DescribeApplications"
}
export declare class DescribeApplicationsRequest extends SpeakeasyBase {
    describeApplicationsRequest: shared.DescribeApplicationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationsXAmzTargetEnum;
}
export declare class DescribeApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeApplicationsResult?: shared.DescribeApplicationsResult;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
