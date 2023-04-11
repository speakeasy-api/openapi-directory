import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisionedProduct = "AWS242ServiceCatalogService.DescribeProvisionedProduct"
}
export declare class DescribeProvisionedProductRequest extends SpeakeasyBase {
    describeProvisionedProductInput: shared.DescribeProvisionedProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisionedProductXAmzTargetEnum;
}
export declare class DescribeProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProvisionedProductOutput?: shared.DescribeProvisionedProductOutput;
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
}
