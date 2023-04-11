import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum {
    SageMakerGetSagemakerServicecatalogPortfolioStatus = "SageMaker.GetSagemakerServicecatalogPortfolioStatus"
}
export declare class GetSagemakerServicecatalogPortfolioStatusRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum;
}
export declare class GetSagemakerServicecatalogPortfolioStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSagemakerServicecatalogPortfolioStatusOutput?: shared.GetSagemakerServicecatalogPortfolioStatusOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
