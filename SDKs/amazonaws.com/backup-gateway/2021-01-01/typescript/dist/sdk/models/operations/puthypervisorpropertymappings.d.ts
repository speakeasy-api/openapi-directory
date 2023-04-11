import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutHypervisorPropertyMappingsXAmzTargetEnum {
    BackupOnPremisesV20210101PutHypervisorPropertyMappings = "BackupOnPremises_v20210101.PutHypervisorPropertyMappings"
}
export declare class PutHypervisorPropertyMappingsRequest extends SpeakeasyBase {
    putHypervisorPropertyMappingsInput: shared.PutHypervisorPropertyMappingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutHypervisorPropertyMappingsXAmzTargetEnum;
}
export declare class PutHypervisorPropertyMappingsResponse extends SpeakeasyBase {
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
     * Success
     */
    putHypervisorPropertyMappingsOutput?: shared.PutHypervisorPropertyMappingsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
