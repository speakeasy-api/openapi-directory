import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelQualityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelQualityJobDefinition = "SageMaker.DescribeModelQualityJobDefinition"
}
export declare class DescribeModelQualityJobDefinitionRequest extends SpeakeasyBase {
    describeModelQualityJobDefinitionRequest: shared.DescribeModelQualityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelQualityJobDefinitionXAmzTargetEnum;
}
export declare class DescribeModelQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelQualityJobDefinitionResponse?: shared.DescribeModelQualityJobDefinitionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
