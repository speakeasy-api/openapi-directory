import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAggregationAuthorizationXAmzTargetEnum {
    StarlingDoveServicePutAggregationAuthorization = "StarlingDoveService.PutAggregationAuthorization"
}
export declare class PutAggregationAuthorizationRequest extends SpeakeasyBase {
    putAggregationAuthorizationRequest: shared.PutAggregationAuthorizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAggregationAuthorizationXAmzTargetEnum;
}
export declare class PutAggregationAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    putAggregationAuthorizationResponse?: shared.PutAggregationAuthorizationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
