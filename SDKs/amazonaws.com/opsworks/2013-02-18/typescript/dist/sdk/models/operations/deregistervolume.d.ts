import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterVolumeXAmzTargetEnum {
    OpsWorks20130218DeregisterVolume = "OpsWorks_20130218.DeregisterVolume"
}
export declare class DeregisterVolumeRequest extends SpeakeasyBase {
    deregisterVolumeRequest: shared.DeregisterVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterVolumeXAmzTargetEnum;
}
export declare class DeregisterVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
