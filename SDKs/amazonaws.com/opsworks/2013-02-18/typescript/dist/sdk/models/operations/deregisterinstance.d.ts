import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterInstanceXAmzTargetEnum {
    OpsWorks20130218DeregisterInstance = "OpsWorks_20130218.DeregisterInstance"
}
export declare class DeregisterInstanceRequest extends SpeakeasyBase {
    deregisterInstanceRequest: shared.DeregisterInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterInstanceXAmzTargetEnum;
}
export declare class DeregisterInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
