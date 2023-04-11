import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetHypervisorXAmzTargetEnum {
    BackupOnPremisesV20210101GetHypervisor = "BackupOnPremises_v20210101.GetHypervisor"
}
export declare class GetHypervisorRequest extends SpeakeasyBase {
    getHypervisorInput: shared.GetHypervisorInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHypervisorXAmzTargetEnum;
}
export declare class GetHypervisorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getHypervisorOutput?: shared.GetHypervisorOutput;
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
