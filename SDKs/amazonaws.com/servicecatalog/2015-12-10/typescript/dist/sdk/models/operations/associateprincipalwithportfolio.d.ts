import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociatePrincipalWithPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociatePrincipalWithPortfolio = "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio"
}
export declare class AssociatePrincipalWithPortfolioRequest extends SpeakeasyBase {
    associatePrincipalWithPortfolioInput: shared.AssociatePrincipalWithPortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociatePrincipalWithPortfolioXAmzTargetEnum;
}
export declare class AssociatePrincipalWithPortfolioResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associatePrincipalWithPortfolioOutput?: Record<string, any>;
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
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
}
