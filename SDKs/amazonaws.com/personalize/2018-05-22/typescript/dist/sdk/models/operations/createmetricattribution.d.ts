import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMetricAttributionXAmzTargetEnum {
    AmazonPersonalizeCreateMetricAttribution = "AmazonPersonalize.CreateMetricAttribution"
}
export declare class CreateMetricAttributionRequest extends SpeakeasyBase {
    createMetricAttributionRequest: shared.CreateMetricAttributionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMetricAttributionXAmzTargetEnum;
}
export declare class CreateMetricAttributionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMetricAttributionResponse?: shared.CreateMetricAttributionResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
