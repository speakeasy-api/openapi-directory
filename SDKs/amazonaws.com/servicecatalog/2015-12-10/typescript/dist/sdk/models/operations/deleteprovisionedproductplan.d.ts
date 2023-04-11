import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProvisionedProductPlan = "AWS242ServiceCatalogService.DeleteProvisionedProductPlan"
}
export declare class DeleteProvisionedProductPlanRequest extends SpeakeasyBase {
    deleteProvisionedProductPlanInput: shared.DeleteProvisionedProductPlanInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProvisionedProductPlanXAmzTargetEnum;
}
export declare class DeleteProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteProvisionedProductPlanOutput?: Record<string, any>;
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
