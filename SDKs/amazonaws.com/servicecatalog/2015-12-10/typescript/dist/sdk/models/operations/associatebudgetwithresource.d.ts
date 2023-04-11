import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateBudgetWithResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateBudgetWithResource = "AWS242ServiceCatalogService.AssociateBudgetWithResource"
}
export declare class AssociateBudgetWithResourceRequest extends SpeakeasyBase {
    associateBudgetWithResourceInput: shared.AssociateBudgetWithResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateBudgetWithResourceXAmzTargetEnum;
}
export declare class AssociateBudgetWithResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateBudgetWithResourceOutput?: Record<string, any>;
    contentType: string;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
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
}
