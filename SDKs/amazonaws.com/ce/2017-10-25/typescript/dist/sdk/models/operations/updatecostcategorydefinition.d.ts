import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCostCategoryDefinitionXAmzTargetEnum {
    AWSInsightsIndexServiceUpdateCostCategoryDefinition = "AWSInsightsIndexService.UpdateCostCategoryDefinition"
}
export declare class UpdateCostCategoryDefinitionRequest extends SpeakeasyBase {
    updateCostCategoryDefinitionRequest: shared.UpdateCostCategoryDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCostCategoryDefinitionXAmzTargetEnum;
}
export declare class UpdateCostCategoryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateCostCategoryDefinitionResponse?: shared.UpdateCostCategoryDefinitionResponse;
}
