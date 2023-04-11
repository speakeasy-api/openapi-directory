import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFlowDefinitionXAmzTargetEnum {
    SageMakerDescribeFlowDefinition = "SageMaker.DescribeFlowDefinition"
}
export declare class DescribeFlowDefinitionRequest extends SpeakeasyBase {
    describeFlowDefinitionRequest: shared.DescribeFlowDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFlowDefinitionXAmzTargetEnum;
}
export declare class DescribeFlowDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFlowDefinitionResponse?: shared.DescribeFlowDefinitionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
