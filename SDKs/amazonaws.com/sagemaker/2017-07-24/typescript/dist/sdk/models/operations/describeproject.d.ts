import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProjectXAmzTargetEnum {
    SageMakerDescribeProject = "SageMaker.DescribeProject"
}
export declare class DescribeProjectRequest extends SpeakeasyBase {
    describeProjectInput: shared.DescribeProjectInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProjectXAmzTargetEnum;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProjectOutput?: shared.DescribeProjectOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
