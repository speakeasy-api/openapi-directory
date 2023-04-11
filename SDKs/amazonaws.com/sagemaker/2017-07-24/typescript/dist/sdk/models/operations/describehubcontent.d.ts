import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHubContentXAmzTargetEnum {
    SageMakerDescribeHubContent = "SageMaker.DescribeHubContent"
}
export declare class DescribeHubContentRequest extends SpeakeasyBase {
    describeHubContentRequest: shared.DescribeHubContentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHubContentXAmzTargetEnum;
}
export declare class DescribeHubContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeHubContentResponse?: shared.DescribeHubContentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
