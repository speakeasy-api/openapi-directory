import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApplicationXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplication = "KinesisAnalytics_20180523.DescribeApplication"
}
export declare class DescribeApplicationRequest extends SpeakeasyBase {
    describeApplicationRequest: shared.DescribeApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationXAmzTargetEnum;
}
export declare class DescribeApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeApplicationResponse?: shared.DescribeApplicationResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
