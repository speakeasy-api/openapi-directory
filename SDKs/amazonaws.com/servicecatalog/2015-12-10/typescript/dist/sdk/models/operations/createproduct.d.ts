import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProduct = "AWS242ServiceCatalogService.CreateProduct"
}
export declare class CreateProductRequest extends SpeakeasyBase {
    createProductInput: shared.CreateProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProductXAmzTargetEnum;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProductOutput?: shared.CreateProductOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
