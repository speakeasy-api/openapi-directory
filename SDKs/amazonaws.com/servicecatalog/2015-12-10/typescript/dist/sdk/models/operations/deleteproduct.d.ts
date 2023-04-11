import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProduct = "AWS242ServiceCatalogService.DeleteProduct"
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    deleteProductInput: shared.DeleteProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProductXAmzTargetEnum;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteProductOutput?: Record<string, any>;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
