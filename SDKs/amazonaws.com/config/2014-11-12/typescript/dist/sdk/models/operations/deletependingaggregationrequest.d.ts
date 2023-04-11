import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePendingAggregationRequestXAmzTargetEnum {
    StarlingDoveServiceDeletePendingAggregationRequest = "StarlingDoveService.DeletePendingAggregationRequest"
}
export declare class DeletePendingAggregationRequestRequest extends SpeakeasyBase {
    deletePendingAggregationRequestRequest: shared.DeletePendingAggregationRequestRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePendingAggregationRequestXAmzTargetEnum;
}
export declare class DeletePendingAggregationRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
