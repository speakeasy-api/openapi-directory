import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserProfileXAmzTargetEnum {
    SageMakerDescribeUserProfile = "SageMaker.DescribeUserProfile"
}
export declare class DescribeUserProfileRequest extends SpeakeasyBase {
    describeUserProfileRequest: shared.DescribeUserProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserProfileXAmzTargetEnum;
}
export declare class DescribeUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserProfileResponse?: shared.DescribeUserProfileResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
