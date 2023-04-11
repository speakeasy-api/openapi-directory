import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociatePrincipalFromPortfolioXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociatePrincipalFromPortfolio = "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio"
}
export declare class DisassociatePrincipalFromPortfolioRequest extends SpeakeasyBase {
    disassociatePrincipalFromPortfolioInput: shared.DisassociatePrincipalFromPortfolioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociatePrincipalFromPortfolioXAmzTargetEnum;
}
export declare class DisassociatePrincipalFromPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociatePrincipalFromPortfolioOutput?: Record<string, any>;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
