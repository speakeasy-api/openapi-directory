import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMyUserProfileXAmzTargetEnum {
    OpsWorks20130218DescribeMyUserProfile = "OpsWorks_20130218.DescribeMyUserProfile"
}
export declare class DescribeMyUserProfileRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMyUserProfileXAmzTargetEnum;
}
export declare class DescribeMyUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMyUserProfileResult?: shared.DescribeMyUserProfileResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
