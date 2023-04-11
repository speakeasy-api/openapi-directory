import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVolumeXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateVolume = "AWSSimbaAPIService_v20180301.CreateVolume"
}
export declare class CreateVolumeRequest extends SpeakeasyBase {
    createVolumeRequest: shared.CreateVolumeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVolumeXAmzTargetEnum;
}
export declare class CreateVolumeResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createVolumeResponse?: shared.CreateVolumeResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
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
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StorageVirtualMachineNotFound
     */
    storageVirtualMachineNotFound?: any;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
}
