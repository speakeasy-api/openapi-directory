import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMetricAttributionXAmzTargetEnum {
    AmazonPersonalizeUpdateMetricAttribution = "AmazonPersonalize.UpdateMetricAttribution"
}
export declare class UpdateMetricAttributionRequest extends SpeakeasyBase {
    updateMetricAttributionRequest: shared.UpdateMetricAttributionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMetricAttributionXAmzTargetEnum;
}
export declare class UpdateMetricAttributionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateMetricAttributionResponse?: shared.UpdateMetricAttributionResponse;
}
