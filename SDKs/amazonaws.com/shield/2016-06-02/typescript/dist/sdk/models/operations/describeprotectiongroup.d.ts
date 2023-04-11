import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProtectionGroupXAmzTargetEnum {
    AWSShield20160616DescribeProtectionGroup = "AWSShield_20160616.DescribeProtectionGroup"
}
export declare class DescribeProtectionGroupRequest extends SpeakeasyBase {
    describeProtectionGroupRequest: shared.DescribeProtectionGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProtectionGroupXAmzTargetEnum;
}
export declare class DescribeProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProtectionGroupResponse?: shared.DescribeProtectionGroupResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
