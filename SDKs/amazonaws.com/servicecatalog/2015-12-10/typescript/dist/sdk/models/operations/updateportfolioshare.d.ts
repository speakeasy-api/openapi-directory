import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdatePortfolioShare = "AWS242ServiceCatalogService.UpdatePortfolioShare"
}
export declare class UpdatePortfolioShareRequest extends SpeakeasyBase {
    updatePortfolioShareInput: shared.UpdatePortfolioShareInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePortfolioShareXAmzTargetEnum;
}
export declare class UpdatePortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updatePortfolioShareOutput?: shared.UpdatePortfolioShareOutput;
}
