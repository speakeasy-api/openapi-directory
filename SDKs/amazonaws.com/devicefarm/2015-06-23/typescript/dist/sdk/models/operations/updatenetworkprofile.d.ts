import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623UpdateNetworkProfile = "DeviceFarm_20150623.UpdateNetworkProfile"
}
export declare class UpdateNetworkProfileRequest extends SpeakeasyBase {
    updateNetworkProfileRequest: shared.UpdateNetworkProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNetworkProfileXAmzTargetEnum;
}
export declare class UpdateNetworkProfileResponse extends SpeakeasyBase {
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
    updateNetworkProfileResult?: shared.UpdateNetworkProfileResult;
}
