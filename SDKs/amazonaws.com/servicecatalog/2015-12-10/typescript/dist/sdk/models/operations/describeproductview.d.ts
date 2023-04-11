import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProductViewXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProductView = "AWS242ServiceCatalogService.DescribeProductView"
}
export declare class DescribeProductViewRequest extends SpeakeasyBase {
    describeProductViewInput: shared.DescribeProductViewInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProductViewXAmzTargetEnum;
}
export declare class DescribeProductViewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProductViewOutput?: shared.DescribeProductViewOutput;
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
