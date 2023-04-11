import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointConfigXAmzTargetEnum {
    SageMakerDescribeEndpointConfig = "SageMaker.DescribeEndpointConfig"
}
export declare class DescribeEndpointConfigRequest extends SpeakeasyBase {
    describeEndpointConfigInput: shared.DescribeEndpointConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointConfigXAmzTargetEnum;
}
export declare class DescribeEndpointConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointConfigOutput?: shared.DescribeEndpointConfigOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
