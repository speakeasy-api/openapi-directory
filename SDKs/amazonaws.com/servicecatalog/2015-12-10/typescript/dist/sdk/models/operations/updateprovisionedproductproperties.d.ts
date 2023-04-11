import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProvisionedProductPropertiesXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisionedProductProperties = "AWS242ServiceCatalogService.UpdateProvisionedProductProperties"
}
export declare class UpdateProvisionedProductPropertiesRequest extends SpeakeasyBase {
    updateProvisionedProductPropertiesInput: shared.UpdateProvisionedProductPropertiesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProvisionedProductPropertiesXAmzTargetEnum;
}
export declare class UpdateProvisionedProductPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateProvisionedProductPropertiesOutput?: shared.UpdateProvisionedProductPropertiesOutput;
}
