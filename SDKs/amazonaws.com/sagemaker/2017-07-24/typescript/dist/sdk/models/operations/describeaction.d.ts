import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeActionXAmzTargetEnum {
    SageMakerDescribeAction = "SageMaker.DescribeAction"
}
export declare class DescribeActionRequest extends SpeakeasyBase {
    describeActionRequest: shared.DescribeActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActionXAmzTargetEnum;
}
export declare class DescribeActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeActionResponse?: shared.DescribeActionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
