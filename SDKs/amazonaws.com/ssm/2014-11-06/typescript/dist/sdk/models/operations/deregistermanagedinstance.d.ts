import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterManagedInstanceXAmzTargetEnum {
    AmazonSSMDeregisterManagedInstance = "AmazonSSM.DeregisterManagedInstance"
}
export declare class DeregisterManagedInstanceRequest extends SpeakeasyBase {
    deregisterManagedInstanceRequest: shared.DeregisterManagedInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterManagedInstanceXAmzTargetEnum;
}
export declare class DeregisterManagedInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterManagedInstanceResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
