import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStackInstancesForProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceListStackInstancesForProvisionedProduct = "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct"
}
export declare class ListStackInstancesForProvisionedProductRequest extends SpeakeasyBase {
    listStackInstancesForProvisionedProductInput: shared.ListStackInstancesForProvisionedProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStackInstancesForProvisionedProductXAmzTargetEnum;
}
export declare class ListStackInstancesForProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listStackInstancesForProvisionedProductOutput?: shared.ListStackInstancesForProvisionedProductOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
