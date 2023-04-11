import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProvisioningParametersXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisioningParameters = "AWS242ServiceCatalogService.DescribeProvisioningParameters"
}
export declare class DescribeProvisioningParametersRequest extends SpeakeasyBase {
    describeProvisioningParametersInput: shared.DescribeProvisioningParametersInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisioningParametersXAmzTargetEnum;
}
export declare class DescribeProvisioningParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProvisioningParametersOutput?: shared.DescribeProvisioningParametersOutput;
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
}
