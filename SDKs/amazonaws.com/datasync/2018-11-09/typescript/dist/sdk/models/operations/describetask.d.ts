import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTaskXAmzTargetEnum {
    FmrsServiceDescribeTask = "FmrsService.DescribeTask"
}
export declare class DescribeTaskRequest extends SpeakeasyBase {
    describeTaskRequest: shared.DescribeTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskXAmzTargetEnum;
}
export declare class DescribeTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTaskResponse?: shared.DescribeTaskResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
