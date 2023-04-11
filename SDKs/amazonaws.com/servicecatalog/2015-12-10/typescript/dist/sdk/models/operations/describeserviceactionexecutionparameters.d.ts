import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServiceActionExecutionParametersXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeServiceActionExecutionParameters = "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters"
}
export declare class DescribeServiceActionExecutionParametersRequest extends SpeakeasyBase {
    describeServiceActionExecutionParametersInput: shared.DescribeServiceActionExecutionParametersInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceActionExecutionParametersXAmzTargetEnum;
}
export declare class DescribeServiceActionExecutionParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServiceActionExecutionParametersOutput?: shared.DescribeServiceActionExecutionParametersOutput;
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
