import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateHypervisorXAmzTargetEnum {
    BackupOnPremisesV20210101UpdateHypervisor = "BackupOnPremises_v20210101.UpdateHypervisor"
}
export declare class UpdateHypervisorRequest extends SpeakeasyBase {
    updateHypervisorInput: shared.UpdateHypervisorInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHypervisorXAmzTargetEnum;
}
export declare class UpdateHypervisorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * Success
     */
    updateHypervisorOutput?: shared.UpdateHypervisorOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
