import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProvisionedProductPlan = "AWS242ServiceCatalogService.CreateProvisionedProductPlan"
}
export declare class CreateProvisionedProductPlanRequest extends SpeakeasyBase {
    createProvisionedProductPlanInput: shared.CreateProvisionedProductPlanInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProvisionedProductPlanXAmzTargetEnum;
}
export declare class CreateProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProvisionedProductPlanOutput?: shared.CreateProvisionedProductPlanOutput;
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
