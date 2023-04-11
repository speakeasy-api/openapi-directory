import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateInstanceXAmzTargetEnum {
    OpsWorks20130218CreateInstance = "OpsWorks_20130218.CreateInstance"
}
export declare class CreateInstanceRequest extends SpeakeasyBase {
    createInstanceRequest: shared.CreateInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceXAmzTargetEnum;
}
export declare class CreateInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createInstanceResult?: shared.CreateInstanceResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
