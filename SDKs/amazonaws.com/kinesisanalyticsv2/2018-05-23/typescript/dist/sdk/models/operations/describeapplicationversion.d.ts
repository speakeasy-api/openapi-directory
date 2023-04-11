import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApplicationVersionXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplicationVersion = "KinesisAnalytics_20180523.DescribeApplicationVersion"
}
export declare class DescribeApplicationVersionRequest extends SpeakeasyBase {
    describeApplicationVersionRequest: shared.DescribeApplicationVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationVersionXAmzTargetEnum;
}
export declare class DescribeApplicationVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeApplicationVersionResponse?: shared.DescribeApplicationVersionResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
