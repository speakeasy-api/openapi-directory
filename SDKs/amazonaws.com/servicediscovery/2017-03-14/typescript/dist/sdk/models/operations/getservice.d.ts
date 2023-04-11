import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetServiceXAmzTargetEnum {
    Route53AutoNamingV20170314GetService = "Route53AutoNaming_v20170314.GetService"
}
export declare class GetServiceRequest extends SpeakeasyBase {
    getServiceRequest: shared.GetServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceXAmzTargetEnum;
}
export declare class GetServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getServiceResponse?: shared.GetServiceResponse;
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
