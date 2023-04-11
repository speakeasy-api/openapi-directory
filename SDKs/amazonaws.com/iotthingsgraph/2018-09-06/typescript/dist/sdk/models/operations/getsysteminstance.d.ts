import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetSystemInstance = "IotThingsGraphFrontEndService.GetSystemInstance"
}
export declare class GetSystemInstanceRequest extends SpeakeasyBase {
    getSystemInstanceRequest: shared.GetSystemInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSystemInstanceXAmzTargetEnum;
}
export declare class GetSystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSystemInstanceResponse?: shared.GetSystemInstanceResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
}
