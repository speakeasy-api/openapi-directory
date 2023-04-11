import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImageXAmzTargetEnum {
    SageMakerDescribeImage = "SageMaker.DescribeImage"
}
export declare class DescribeImageRequest extends SpeakeasyBase {
    describeImageRequest: shared.DescribeImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageXAmzTargetEnum;
}
export declare class DescribeImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImageResponse?: shared.DescribeImageResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
