import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportAsProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceImportAsProvisionedProduct = "AWS242ServiceCatalogService.ImportAsProvisionedProduct"
}
export declare class ImportAsProvisionedProductRequest extends SpeakeasyBase {
    importAsProvisionedProductInput: shared.ImportAsProvisionedProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportAsProvisionedProductXAmzTargetEnum;
}
export declare class ImportAsProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * Success
     */
    importAsProvisionedProductOutput?: shared.ImportAsProvisionedProductOutput;
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
