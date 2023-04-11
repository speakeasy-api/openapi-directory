import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreatePortfolio = "AWS242ServiceCatalogService.CreatePortfolio"
}
export declare class CreatePortfolioRequest extends SpeakeasyBase {
    createPortfolioInput: shared.CreatePortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePortfolioXAmzTargetEnum;
}
export declare class CreatePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPortfolioOutput?: shared.CreatePortfolioOutput;
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
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
