import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdatePortfolio = "AWS242ServiceCatalogService.UpdatePortfolio"
}
export declare class UpdatePortfolioRequest extends SpeakeasyBase {
    updatePortfolioInput: shared.UpdatePortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePortfolioXAmzTargetEnum;
}
export declare class UpdatePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
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
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
    /**
     * Success
     */
    updatePortfolioOutput?: shared.UpdatePortfolioOutput;
}
