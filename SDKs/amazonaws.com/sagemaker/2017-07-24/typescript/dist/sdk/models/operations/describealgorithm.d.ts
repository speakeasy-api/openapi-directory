import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAlgorithmXAmzTargetEnum {
    SageMakerDescribeAlgorithm = "SageMaker.DescribeAlgorithm"
}
export declare class DescribeAlgorithmRequest extends SpeakeasyBase {
    describeAlgorithmInput: shared.DescribeAlgorithmInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAlgorithmXAmzTargetEnum;
}
export declare class DescribeAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAlgorithmOutput?: shared.DescribeAlgorithmOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
