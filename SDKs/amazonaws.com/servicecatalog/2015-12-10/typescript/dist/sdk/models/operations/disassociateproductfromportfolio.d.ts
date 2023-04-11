import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateProductFromPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateProductFromPortfolio = "AWS242ServiceCatalogService.DisassociateProductFromPortfolio"
}
export declare class DisassociateProductFromPortfolioRequest extends SpeakeasyBase {
    disassociateProductFromPortfolioInput: shared.DisassociateProductFromPortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateProductFromPortfolioXAmzTargetEnum;
}
export declare class DisassociateProductFromPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateProductFromPortfolioOutput?: Record<string, any>;
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
}
