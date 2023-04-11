import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateInstanceProfileXAmzTargetEnum {
    DeviceFarm20150623CreateInstanceProfile = "DeviceFarm_20150623.CreateInstanceProfile"
}
export declare class CreateInstanceProfileRequest extends SpeakeasyBase {
    createInstanceProfileRequest: shared.CreateInstanceProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceProfileXAmzTargetEnum;
}
export declare class CreateInstanceProfileResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createInstanceProfileResult?: shared.CreateInstanceProfileResult;
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
