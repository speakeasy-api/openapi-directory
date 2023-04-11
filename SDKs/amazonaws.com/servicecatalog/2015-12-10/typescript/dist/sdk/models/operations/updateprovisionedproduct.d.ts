import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisionedProduct = "AWS242ServiceCatalogService.UpdateProvisionedProduct"
}
export declare class UpdateProvisionedProductRequest extends SpeakeasyBase {
    updateProvisionedProductInput: shared.UpdateProvisionedProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProvisionedProductXAmzTargetEnum;
}
export declare class UpdateProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateProvisionedProductOutput?: shared.UpdateProvisionedProductOutput;
}
