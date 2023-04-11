import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateVolumeXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301UpdateVolume = "AWSSimbaAPIService_v20180301.UpdateVolume"
}
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    updateVolumeRequest: shared.UpdateVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVolumeXAmzTargetEnum;
}
export declare class UpdateVolumeResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * MissingVolumeConfiguration
     */
    missingVolumeConfiguration?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateVolumeResponse?: shared.UpdateVolumeResponse;
    /**
     * VolumeNotFound
     */
    volumeNotFound?: any;
}
