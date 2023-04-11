import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProduct = "AWS242ServiceCatalogService.DescribeProduct"
}
export declare class DescribeProductRequest extends SpeakeasyBase {
    describeProductInput: shared.DescribeProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProductXAmzTargetEnum;
}
export declare class DescribeProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProductOutput?: shared.DescribeProductOutput;
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
