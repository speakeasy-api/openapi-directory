import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623GetInstanceProfile = "DeviceFarm_20150623.GetInstanceProfile"
}
export declare class GetInstanceProfileRequest extends SpeakeasyBase {
    getInstanceProfileRequest: shared.GetInstanceProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceProfileXAmzTargetEnum;
}
export declare class GetInstanceProfileResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getInstanceProfileResult?: shared.GetInstanceProfileResult;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
