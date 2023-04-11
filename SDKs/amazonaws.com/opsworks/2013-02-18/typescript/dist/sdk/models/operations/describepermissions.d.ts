import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePermissionsXAmzTargetEnum {
    OpsWorks20130218DescribePermissions = "OpsWorks_20130218.DescribePermissions"
}
export declare class DescribePermissionsRequest extends SpeakeasyBase {
    describePermissionsRequest: shared.DescribePermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePermissionsXAmzTargetEnum;
}
export declare class DescribePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePermissionsResult?: shared.DescribePermissionsResult;
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
