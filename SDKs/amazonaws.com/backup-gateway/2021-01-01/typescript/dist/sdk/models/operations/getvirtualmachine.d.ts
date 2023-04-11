import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetVirtualMachineXAmzTargetEnum {
    BackupOnPremisesV20210101GetVirtualMachine = "BackupOnPremises_v20210101.GetVirtualMachine"
}
export declare class GetVirtualMachineRequest extends SpeakeasyBase {
    getVirtualMachineInput: shared.GetVirtualMachineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetVirtualMachineXAmzTargetEnum;
}
export declare class GetVirtualMachineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getVirtualMachineOutput?: shared.GetVirtualMachineOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
