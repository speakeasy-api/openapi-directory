import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCostCategoryDefinitionXAmzTargetEnum {
    AWSInsightsIndexServiceCreateCostCategoryDefinition = "AWSInsightsIndexService.CreateCostCategoryDefinition"
}
export declare class CreateCostCategoryDefinitionRequest extends SpeakeasyBase {
    createCostCategoryDefinitionRequest: shared.CreateCostCategoryDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCostCategoryDefinitionXAmzTargetEnum;
}
export declare class CreateCostCategoryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCostCategoryDefinitionResponse?: shared.CreateCostCategoryDefinitionResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
