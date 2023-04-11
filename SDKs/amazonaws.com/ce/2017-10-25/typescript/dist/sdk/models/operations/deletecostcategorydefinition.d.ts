import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCostCategoryDefinitionXAmzTargetEnum {
    AWSInsightsIndexServiceDeleteCostCategoryDefinition = "AWSInsightsIndexService.DeleteCostCategoryDefinition"
}
export declare class DeleteCostCategoryDefinitionRequest extends SpeakeasyBase {
    deleteCostCategoryDefinitionRequest: shared.DeleteCostCategoryDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCostCategoryDefinitionXAmzTargetEnum;
}
export declare class DeleteCostCategoryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteCostCategoryDefinitionResponse?: shared.DeleteCostCategoryDefinitionResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
