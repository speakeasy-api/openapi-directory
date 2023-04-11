import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestHypervisorConfigurationXAmzTargetEnum {
    BackupOnPremisesV20210101TestHypervisorConfiguration = "BackupOnPremises_v20210101.TestHypervisorConfiguration"
}
export declare class TestHypervisorConfigurationRequest extends SpeakeasyBase {
    testHypervisorConfigurationInput: shared.TestHypervisorConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestHypervisorConfigurationXAmzTargetEnum;
}
export declare class TestHypervisorConfigurationResponse extends SpeakeasyBase {
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
     * Success
     */
    testHypervisorConfigurationOutput?: Record<string, any>;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
