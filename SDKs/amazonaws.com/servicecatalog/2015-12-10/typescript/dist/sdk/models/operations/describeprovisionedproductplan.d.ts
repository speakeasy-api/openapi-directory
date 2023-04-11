import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisionedProductPlan = "AWS242ServiceCatalogService.DescribeProvisionedProductPlan"
}
export declare class DescribeProvisionedProductPlanRequest extends SpeakeasyBase {
    describeProvisionedProductPlanInput: shared.DescribeProvisionedProductPlanInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisionedProductPlanXAmzTargetEnum;
}
export declare class DescribeProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProvisionedProductPlanOutput?: shared.DescribeProvisionedProductPlanOutput;
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
