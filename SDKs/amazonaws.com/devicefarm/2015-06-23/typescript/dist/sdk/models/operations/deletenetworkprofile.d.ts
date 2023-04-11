import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623DeleteNetworkProfile = "DeviceFarm_20150623.DeleteNetworkProfile"
}
export declare class DeleteNetworkProfileRequest extends SpeakeasyBase {
    deleteNetworkProfileRequest: shared.DeleteNetworkProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNetworkProfileXAmzTargetEnum;
}
export declare class DeleteNetworkProfileResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteNetworkProfileResult?: Record<string, any>;
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
