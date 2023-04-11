import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDatasetGroupXAmzTargetEnum {
    AmazonForecastDeleteDatasetGroup = "AmazonForecast.DeleteDatasetGroup"
}
export declare class DeleteDatasetGroupRequest extends SpeakeasyBase {
    deleteDatasetGroupRequest: shared.DeleteDatasetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatasetGroupXAmzTargetEnum;
}
export declare class DeleteDatasetGroupResponse extends SpeakeasyBase {
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
