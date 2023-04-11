import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeDataQualityJobDefinition = "SageMaker.DescribeDataQualityJobDefinition"
}
export declare class DescribeDataQualityJobDefinitionRequest extends SpeakeasyBase {
    describeDataQualityJobDefinitionRequest: shared.DescribeDataQualityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDataQualityJobDefinitionXAmzTargetEnum;
}
export declare class DescribeDataQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDataQualityJobDefinitionResponse?: shared.DescribeDataQualityJobDefinitionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
