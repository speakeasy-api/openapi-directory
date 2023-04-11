import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEmergencyContactSettingsXAmzTargetEnum {
    AWSShield20160616UpdateEmergencyContactSettings = "AWSShield_20160616.UpdateEmergencyContactSettings"
}
export declare class UpdateEmergencyContactSettingsRequest extends SpeakeasyBase {
    updateEmergencyContactSettingsRequest: shared.UpdateEmergencyContactSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEmergencyContactSettingsXAmzTargetEnum;
}
export declare class UpdateEmergencyContactSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateEmergencyContactSettingsResponse?: Record<string, any>;
}
