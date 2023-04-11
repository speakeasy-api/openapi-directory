import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportHypervisorConfigurationXAmzTargetEnum {
    BackupOnPremisesV20210101ImportHypervisorConfiguration = "BackupOnPremises_v20210101.ImportHypervisorConfiguration"
}
export declare class ImportHypervisorConfigurationRequest extends SpeakeasyBase {
    importHypervisorConfigurationInput: shared.ImportHypervisorConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportHypervisorConfigurationXAmzTargetEnum;
}
export declare class ImportHypervisorConfigurationResponse extends SpeakeasyBase {
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
     * Success
     */
    importHypervisorConfigurationOutput?: shared.ImportHypervisorConfigurationOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
