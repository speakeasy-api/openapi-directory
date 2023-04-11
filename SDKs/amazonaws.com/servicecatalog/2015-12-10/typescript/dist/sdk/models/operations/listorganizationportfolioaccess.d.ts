import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListOrganizationPortfolioAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceListOrganizationPortfolioAccess = "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess"
}
export declare class ListOrganizationPortfolioAccessRequest extends SpeakeasyBase {
    listOrganizationPortfolioAccessInput: shared.ListOrganizationPortfolioAccessInput;
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOrganizationPortfolioAccessXAmzTargetEnum;
}
export declare class ListOrganizationPortfolioAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listOrganizationPortfolioAccessOutput?: shared.ListOrganizationPortfolioAccessOutput;
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
