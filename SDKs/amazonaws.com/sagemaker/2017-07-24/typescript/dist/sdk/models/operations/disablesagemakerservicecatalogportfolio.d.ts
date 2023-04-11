import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DisableSagemakerServicecatalogPortfolioXAmzTargetEnum {
    SageMakerDisableSagemakerServicecatalogPortfolio = "SageMaker.DisableSagemakerServicecatalogPortfolio"
}
export declare class DisableSagemakerServicecatalogPortfolioRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableSagemakerServicecatalogPortfolioXAmzTargetEnum;
}
export declare class DisableSagemakerServicecatalogPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableSagemakerServicecatalogPortfolioOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
