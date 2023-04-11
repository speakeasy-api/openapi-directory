import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProduct = "AWS242ServiceCatalogService.UpdateProduct"
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    updateProductInput: shared.UpdateProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProductXAmzTargetEnum;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
    /**
     * Success
     */
    updateProductOutput?: shared.UpdateProductOutput;
}
