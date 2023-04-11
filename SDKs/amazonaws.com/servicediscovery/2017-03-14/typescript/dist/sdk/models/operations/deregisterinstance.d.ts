import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314DeregisterInstance = "Route53AutoNaming_v20170314.DeregisterInstance"
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
    /**
     * Success
     */
    deregisterInstanceResponse?: shared.DeregisterInstanceResponse;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
    /**
     * InstanceNotFound
     */
    instanceNotFound?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
