import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UndeploySystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUndeploySystemInstance = "IotThingsGraphFrontEndService.UndeploySystemInstance"
}
export declare class UndeploySystemInstanceRequest extends SpeakeasyBase {
    undeploySystemInstanceRequest: shared.UndeploySystemInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeploySystemInstanceXAmzTargetEnum;
}
export declare class UndeploySystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    undeploySystemInstanceResponse?: shared.UndeploySystemInstanceResponse;
}
