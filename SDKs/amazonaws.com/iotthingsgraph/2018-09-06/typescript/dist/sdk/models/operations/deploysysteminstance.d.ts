import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeploySystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeploySystemInstance = "IotThingsGraphFrontEndService.DeploySystemInstance"
}
export declare class DeploySystemInstanceRequest extends SpeakeasyBase {
    deploySystemInstanceRequest: shared.DeploySystemInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeploySystemInstanceXAmzTargetEnum;
}
export declare class DeploySystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deploySystemInstanceResponse?: shared.DeploySystemInstanceResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
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
}
