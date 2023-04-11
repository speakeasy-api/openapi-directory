import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMetricAttributionXAmzTargetEnum {
    AmazonPersonalizeDeleteMetricAttribution = "AmazonPersonalize.DeleteMetricAttribution"
}
export declare class DeleteMetricAttributionRequest extends SpeakeasyBase {
    deleteMetricAttributionRequest: shared.DeleteMetricAttributionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMetricAttributionXAmzTargetEnum;
}
export declare class DeleteMetricAttributionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
}
