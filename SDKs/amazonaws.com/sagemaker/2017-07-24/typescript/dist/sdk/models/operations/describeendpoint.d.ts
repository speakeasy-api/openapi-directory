import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointXAmzTargetEnum {
    SageMakerDescribeEndpoint = "SageMaker.DescribeEndpoint"
}
export declare class DescribeEndpointRequest extends SpeakeasyBase {
    describeEndpointInput: shared.DescribeEndpointInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointXAmzTargetEnum;
}
export declare class DescribeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointOutput?: shared.DescribeEndpointOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
