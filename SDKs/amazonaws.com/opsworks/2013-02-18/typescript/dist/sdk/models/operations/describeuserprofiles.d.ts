import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserProfilesXAmzTargetEnum {
    OpsWorks20130218DescribeUserProfiles = "OpsWorks_20130218.DescribeUserProfiles"
}
export declare class DescribeUserProfilesRequest extends SpeakeasyBase {
    describeUserProfilesRequest: shared.DescribeUserProfilesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserProfilesXAmzTargetEnum;
}
export declare class DescribeUserProfilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserProfilesResult?: shared.DescribeUserProfilesResult;
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
