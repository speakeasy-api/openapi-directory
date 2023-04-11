import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623UpdateInstanceProfile = "DeviceFarm_20150623.UpdateInstanceProfile"
}
export declare class UpdateInstanceProfileRequest extends SpeakeasyBase {
    updateInstanceProfileRequest: shared.UpdateInstanceProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceProfileXAmzTargetEnum;
}
export declare class UpdateInstanceProfileResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    /**
     * Success
     */
    updateInstanceProfileResult?: shared.UpdateInstanceProfileResult;
}
