import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623CreateNetworkProfile = "DeviceFarm_20150623.CreateNetworkProfile"
}
export declare class CreateNetworkProfileRequest extends SpeakeasyBase {
    createNetworkProfileRequest: shared.CreateNetworkProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNetworkProfileXAmzTargetEnum;
}
export declare class CreateNetworkProfileResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createNetworkProfileResult?: shared.CreateNetworkProfileResult;
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
