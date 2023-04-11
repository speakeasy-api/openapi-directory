import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ProvisionProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceProvisionProduct = "AWS242ServiceCatalogService.ProvisionProduct"
}
export declare class ProvisionProductRequest extends SpeakeasyBase {
    provisionProductInput: shared.ProvisionProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ProvisionProductXAmzTargetEnum;
}
export declare class ProvisionProductResponse extends SpeakeasyBase {
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
     * Success
     */
    provisionProductOutput?: shared.ProvisionProductOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
