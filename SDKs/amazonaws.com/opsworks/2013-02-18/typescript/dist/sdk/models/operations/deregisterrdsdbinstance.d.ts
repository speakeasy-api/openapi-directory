import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterRdsDbInstanceXAmzTargetEnum {
    OpsWorks20130218DeregisterRdsDbInstance = "OpsWorks_20130218.DeregisterRdsDbInstance"
}
export declare class DeregisterRdsDbInstanceRequest extends SpeakeasyBase {
    deregisterRdsDbInstanceRequest: shared.DeregisterRdsDbInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterRdsDbInstanceXAmzTargetEnum;
}
export declare class DeregisterRdsDbInstanceResponse extends SpeakeasyBase {
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
