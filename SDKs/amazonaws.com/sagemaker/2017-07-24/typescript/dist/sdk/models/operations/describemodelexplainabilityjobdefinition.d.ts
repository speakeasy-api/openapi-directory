import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelExplainabilityJobDefinition = "SageMaker.DescribeModelExplainabilityJobDefinition"
}
export declare class DescribeModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    describeModelExplainabilityJobDefinitionRequest: shared.DescribeModelExplainabilityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelExplainabilityJobDefinitionXAmzTargetEnum;
}
export declare class DescribeModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelExplainabilityJobDefinitionResponse?: shared.DescribeModelExplainabilityJobDefinitionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
