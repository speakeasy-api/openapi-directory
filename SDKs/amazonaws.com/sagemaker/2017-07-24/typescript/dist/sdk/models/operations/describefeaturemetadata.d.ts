import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFeatureMetadataXAmzTargetEnum {
    SageMakerDescribeFeatureMetadata = "SageMaker.DescribeFeatureMetadata"
}
export declare class DescribeFeatureMetadataRequest extends SpeakeasyBase {
    describeFeatureMetadataRequest: shared.DescribeFeatureMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFeatureMetadataXAmzTargetEnum;
}
export declare class DescribeFeatureMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFeatureMetadataResponse?: shared.DescribeFeatureMetadataResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
