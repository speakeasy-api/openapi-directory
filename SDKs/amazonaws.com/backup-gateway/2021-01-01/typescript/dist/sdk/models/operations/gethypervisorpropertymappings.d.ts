import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetHypervisorPropertyMappingsXAmzTargetEnum {
    BackupOnPremisesV20210101GetHypervisorPropertyMappings = "BackupOnPremises_v20210101.GetHypervisorPropertyMappings"
}
export declare class GetHypervisorPropertyMappingsRequest extends SpeakeasyBase {
    getHypervisorPropertyMappingsInput: shared.GetHypervisorPropertyMappingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHypervisorPropertyMappingsXAmzTargetEnum;
}
export declare class GetHypervisorPropertyMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getHypervisorPropertyMappingsOutput?: shared.GetHypervisorPropertyMappingsOutput;
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
