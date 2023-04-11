import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateStorageVirtualMachineXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301UpdateStorageVirtualMachine = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine"
}
export declare class UpdateStorageVirtualMachineRequest extends SpeakeasyBase {
    updateStorageVirtualMachineRequest: shared.UpdateStorageVirtualMachineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStorageVirtualMachineXAmzTargetEnum;
}
export declare class UpdateStorageVirtualMachineResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateStorageVirtualMachineResponse?: shared.UpdateStorageVirtualMachineResponse;
}
