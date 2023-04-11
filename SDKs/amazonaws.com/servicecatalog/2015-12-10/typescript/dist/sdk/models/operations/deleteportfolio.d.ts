import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeletePortfolio = "AWS242ServiceCatalogService.DeletePortfolio"
}
export declare class DeletePortfolioRequest extends SpeakeasyBase {
    deletePortfolioInput: shared.DeletePortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePortfolioXAmzTargetEnum;
}
export declare class DeletePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePortfolioOutput?: Record<string, any>;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
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
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
