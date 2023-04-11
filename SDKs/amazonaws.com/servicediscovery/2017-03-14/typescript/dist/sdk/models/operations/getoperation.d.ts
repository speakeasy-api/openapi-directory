import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOperationXAmzTargetEnum {
    Route53AutoNamingV20170314GetOperation = "Route53AutoNaming_v20170314.GetOperation"
}
export declare class GetOperationRequest extends SpeakeasyBase {
    getOperationRequest: shared.GetOperationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationXAmzTargetEnum;
}
export declare class GetOperationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOperationResponse?: shared.GetOperationResponse;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * OperationNotFound
     */
    operationNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
