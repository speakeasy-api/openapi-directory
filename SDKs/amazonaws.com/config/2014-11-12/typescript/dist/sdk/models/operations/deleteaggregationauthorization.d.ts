import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAggregationAuthorizationXAmzTargetEnum {
    StarlingDoveServiceDeleteAggregationAuthorization = "StarlingDoveService.DeleteAggregationAuthorization"
}
export declare class DeleteAggregationAuthorizationRequest extends SpeakeasyBase {
    deleteAggregationAuthorizationRequest: shared.DeleteAggregationAuthorizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAggregationAuthorizationXAmzTargetEnum;
}
export declare class DeleteAggregationAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
