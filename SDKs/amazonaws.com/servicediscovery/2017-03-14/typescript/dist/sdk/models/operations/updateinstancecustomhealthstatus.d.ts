import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateInstanceCustomHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateInstanceCustomHealthStatus = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"
}
export declare class UpdateInstanceCustomHealthStatusRequest extends SpeakeasyBase {
    updateInstanceCustomHealthStatusRequest: shared.UpdateInstanceCustomHealthStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceCustomHealthStatusXAmzTargetEnum;
}
export declare class UpdateInstanceCustomHealthStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomHealthNotFound
     */
    customHealthNotFound?: any;
    /**
     * InstanceNotFound
     */
    instanceNotFound?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
