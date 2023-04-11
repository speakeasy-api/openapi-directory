import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceExecuteProvisionedProductPlan = "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan"
}
export declare class ExecuteProvisionedProductPlanRequest extends SpeakeasyBase {
    executeProvisionedProductPlanInput: shared.ExecuteProvisionedProductPlanInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteProvisionedProductPlanXAmzTargetEnum;
}
export declare class ExecuteProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    executeProvisionedProductPlanOutput?: shared.ExecuteProvisionedProductPlanOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
