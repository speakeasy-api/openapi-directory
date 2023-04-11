import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStorageVirtualMachineXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine"
}
export declare class CreateStorageVirtualMachineRequest extends SpeakeasyBase {
    createStorageVirtualMachineRequest: shared.CreateStorageVirtualMachineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStorageVirtualMachineXAmzTargetEnum;
}
export declare class CreateStorageVirtualMachineResponse extends SpeakeasyBase {
    /**
     * ActiveDirectoryError
     */
    activeDirectoryError?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createStorageVirtualMachineResponse?: shared.CreateStorageVirtualMachineResponse;
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
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
}
