import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum EnableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerEnableSagemakerServicecatalogPortfolio = "SageMaker.EnableSagemakerServicecatalogPortfolio"
}
export declare class EnableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}
export declare class EnableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableSagemakerServicecatalogPortfolioOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
