import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelXAmzTargetEnum {
    SageMakerDescribeModel = "SageMaker.DescribeModel"
}
export declare class DescribeModelRequest extends SpeakeasyBase {
    describeModelInput: shared.DescribeModelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelXAmzTargetEnum;
}
export declare class DescribeModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelOutput?: shared.DescribeModelOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
