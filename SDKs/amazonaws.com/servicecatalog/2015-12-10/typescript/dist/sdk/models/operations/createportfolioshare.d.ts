import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePortfolioShareXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreatePortfolioShare = "AWS242ServiceCatalogService.CreatePortfolioShare"
}
export declare class CreatePortfolioShareRequest extends SpeakeasyBase {
    createPortfolioShareInput: shared.CreatePortfolioShareInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePortfolioShareXAmzTargetEnum;
}
export declare class CreatePortfolioShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPortfolioShareOutput?: shared.CreatePortfolioShareOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
