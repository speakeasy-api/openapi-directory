import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVolumeXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteVolume = "AWSSimbaAPIService_v20180301.DeleteVolume"
}
export declare class DeleteVolumeRequest extends SpeakeasyBase {
    deleteVolumeRequest: shared.DeleteVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVolumeXAmzTargetEnum;
}
export declare class DeleteVolumeResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    deleteVolumeResponse?: shared.DeleteVolumeResponse;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VolumeNotFound
     */
    volumeNotFound?: any;
}
