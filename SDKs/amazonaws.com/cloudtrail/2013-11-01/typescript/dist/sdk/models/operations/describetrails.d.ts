import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrailsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails"
}
export declare class DescribeTrailsRequest extends SpeakeasyBase {
    describeTrailsRequest: shared.DescribeTrailsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrailsXAmzTargetEnum;
}
export declare class DescribeTrailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrailsResponse?: shared.DescribeTrailsResponse;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
