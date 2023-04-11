import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServiceXAmzTargetEnum {
    Route53AutoNamingV20170314DeleteService = "Route53AutoNaming_v20170314.DeleteService"
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    deleteServiceRequest: shared.DeleteServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteServiceResponse?: Record<string, any>;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceNotFound
     */
    serviceNotFound?: any;
}
