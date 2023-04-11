import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelBiasJobDefinition = "SageMaker.DescribeModelBiasJobDefinition"
}
export declare class DescribeModelBiasJobDefinitionRequest extends SpeakeasyBase {
    describeModelBiasJobDefinitionRequest: shared.DescribeModelBiasJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelBiasJobDefinitionXAmzTargetEnum;
}
export declare class DescribeModelBiasJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelBiasJobDefinitionResponse?: shared.DescribeModelBiasJobDefinitionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
