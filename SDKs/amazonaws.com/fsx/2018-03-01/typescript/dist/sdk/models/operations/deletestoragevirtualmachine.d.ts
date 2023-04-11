import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteStorageVirtualMachineXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteStorageVirtualMachine = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine"
}
export declare class DeleteStorageVirtualMachineRequest extends SpeakeasyBase {
    deleteStorageVirtualMachineRequest: shared.DeleteStorageVirtualMachineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStorageVirtualMachineXAmzTargetEnum;
}
export declare class DeleteStorageVirtualMachineResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    deleteStorageVirtualMachineResponse?: shared.DeleteStorageVirtualMachineResponse;
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
}
