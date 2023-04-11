import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623GetNetworkProfile = "DeviceFarm_20150623.GetNetworkProfile"
}
export declare class GetNetworkProfileRequest extends SpeakeasyBase {
    getNetworkProfileRequest: shared.GetNetworkProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNetworkProfileXAmzTargetEnum;
}
export declare class GetNetworkProfileResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getNetworkProfileResult?: shared.GetNetworkProfileResult;
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
