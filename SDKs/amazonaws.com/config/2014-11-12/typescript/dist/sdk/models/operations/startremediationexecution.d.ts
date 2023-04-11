import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartRemediationExecutionXAmzTargetEnum {
    StarlingDoveServiceStartRemediationExecution = "StarlingDoveService.StartRemediationExecution"
}
export declare class StartRemediationExecutionRequest extends SpeakeasyBase {
    startRemediationExecutionRequest: shared.StartRemediationExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRemediationExecutionXAmzTargetEnum;
}
export declare class StartRemediationExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchRemediationConfigurationException
     */
    noSuchRemediationConfigurationException?: any;
    /**
     * Success
     */
    startRemediationExecutionResponse?: shared.StartRemediationExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
