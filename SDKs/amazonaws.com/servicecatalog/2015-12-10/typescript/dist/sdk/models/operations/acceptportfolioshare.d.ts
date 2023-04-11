import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptPortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceAcceptPortfolioShare = "AWS242ServiceCatalogService.AcceptPortfolioShare"
}
export declare class AcceptPortfolioShareRequest extends SpeakeasyBase {
    acceptPortfolioShareInput: shared.AcceptPortfolioShareInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptPortfolioShareXAmzTargetEnum;
}
export declare class AcceptPortfolioShareResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptPortfolioShareOutput?: Record<string, any>;
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
