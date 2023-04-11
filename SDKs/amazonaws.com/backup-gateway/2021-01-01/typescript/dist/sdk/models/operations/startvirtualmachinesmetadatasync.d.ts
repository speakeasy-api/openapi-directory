import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartVirtualMachinesMetadataSyncXAmzTargetEnum {
    BackupOnPremisesV20210101StartVirtualMachinesMetadataSync = "BackupOnPremises_v20210101.StartVirtualMachinesMetadataSync"
}
export declare class StartVirtualMachinesMetadataSyncRequest extends SpeakeasyBase {
    startVirtualMachinesMetadataSyncInput: shared.StartVirtualMachinesMetadataSyncInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartVirtualMachinesMetadataSyncXAmzTargetEnum;
}
export declare class StartVirtualMachinesMetadataSyncResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startVirtualMachinesMetadataSyncOutput?: shared.StartVirtualMachinesMetadataSyncOutput;
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
