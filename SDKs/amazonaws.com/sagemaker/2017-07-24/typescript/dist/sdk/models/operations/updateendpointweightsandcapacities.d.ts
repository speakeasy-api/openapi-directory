import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum {
    SageMakerUpdateEndpointWeightsAndCapacities = "SageMaker.UpdateEndpointWeightsAndCapacities"
}
export declare class UpdateEndpointWeightsAndCapacitiesRequest extends SpeakeasyBase {
    updateEndpointWeightsAndCapacitiesInput: shared.UpdateEndpointWeightsAndCapacitiesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum;
}
export declare class UpdateEndpointWeightsAndCapacitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * Success
     */
    updateEndpointWeightsAndCapacitiesOutput?: shared.UpdateEndpointWeightsAndCapacitiesOutput;
}
