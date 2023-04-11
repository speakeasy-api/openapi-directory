import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateProductWithPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateProductWithPortfolio = "AWS242ServiceCatalogService.AssociateProductWithPortfolio"
}
export declare class AssociateProductWithPortfolioRequest extends SpeakeasyBase {
    associateProductWithPortfolioInput: shared.AssociateProductWithPortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateProductWithPortfolioXAmzTargetEnum;
}
export declare class AssociateProductWithPortfolioResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateProductWithPortfolioOutput?: Record<string, any>;
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
