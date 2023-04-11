import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCostCategoryDefinitionXAmzTargetEnum {
    AWSInsightsIndexServiceDescribeCostCategoryDefinition = "AWSInsightsIndexService.DescribeCostCategoryDefinition"
}
export declare class DescribeCostCategoryDefinitionRequest extends SpeakeasyBase {
    describeCostCategoryDefinitionRequest: shared.DescribeCostCategoryDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCostCategoryDefinitionXAmzTargetEnum;
}
export declare class DescribeCostCategoryDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCostCategoryDefinitionResponse?: shared.DescribeCostCategoryDefinitionResponse;
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
