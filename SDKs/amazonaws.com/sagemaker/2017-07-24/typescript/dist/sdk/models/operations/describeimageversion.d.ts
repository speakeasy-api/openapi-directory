import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImageVersionXAmzTargetEnum {
    SageMakerDescribeImageVersion = "SageMaker.DescribeImageVersion"
}
export declare class DescribeImageVersionRequest extends SpeakeasyBase {
    describeImageVersionRequest: shared.DescribeImageVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageVersionXAmzTargetEnum;
}
export declare class DescribeImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImageVersionResponse?: shared.DescribeImageVersionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
