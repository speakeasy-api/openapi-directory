import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RejectPortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceRejectPortfolioShare = "AWS242ServiceCatalogService.RejectPortfolioShare"
}
export declare class RejectPortfolioShareRequest extends SpeakeasyBase {
    rejectPortfolioShareInput: shared.RejectPortfolioShareInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectPortfolioShareXAmzTargetEnum;
}
export declare class RejectPortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    rejectPortfolioShareOutput?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
