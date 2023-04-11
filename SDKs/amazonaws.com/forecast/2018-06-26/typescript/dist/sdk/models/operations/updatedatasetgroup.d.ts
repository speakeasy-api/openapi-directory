import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDatasetGroupXAmzTargetEnum {
    AmazonForecastUpdateDatasetGroup = "AmazonForecast.UpdateDatasetGroup"
}
export declare class UpdateDatasetGroupRequest extends SpeakeasyBase {
    updateDatasetGroupRequest: shared.UpdateDatasetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDatasetGroupXAmzTargetEnum;
}
export declare class UpdateDatasetGroupResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateDatasetGroupResponse?: Record<string, any>;
}
