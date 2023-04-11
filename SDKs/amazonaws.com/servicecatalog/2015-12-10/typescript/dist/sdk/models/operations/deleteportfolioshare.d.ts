import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeletePortfolioShare = "AWS242ServiceCatalogService.DeletePortfolioShare"
}
export declare class DeletePortfolioShareRequest extends SpeakeasyBase {
    deletePortfolioShareInput: shared.DeletePortfolioShareInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePortfolioShareXAmzTargetEnum;
}
export declare class DeletePortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deletePortfolioShareOutput?: shared.DeletePortfolioShareOutput;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
