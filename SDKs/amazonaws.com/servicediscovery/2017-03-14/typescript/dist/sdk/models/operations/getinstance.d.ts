import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314GetInstance = "Route53AutoNaming_v20170314.GetInstance"
}
export declare class GetInstanceRequest extends SpeakeasyBase {
    getInstanceRequest: shared.GetInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceXAmzTargetEnum;
}
export declare class GetInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInstanceResponse?: shared.GetInstanceResponse;
    /**
     * InstanceNotFound
     */
    instanceNotFound?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
}
