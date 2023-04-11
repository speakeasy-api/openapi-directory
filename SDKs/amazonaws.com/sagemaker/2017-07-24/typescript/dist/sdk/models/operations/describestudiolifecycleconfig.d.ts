import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStudioLifecycleConfigXAmzTargetEnum {
    SageMakerDescribeStudioLifecycleConfig = "SageMaker.DescribeStudioLifecycleConfig"
}
export declare class DescribeStudioLifecycleConfigRequest extends SpeakeasyBase {
    describeStudioLifecycleConfigRequest: shared.DescribeStudioLifecycleConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStudioLifecycleConfigXAmzTargetEnum;
}
export declare class DescribeStudioLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStudioLifecycleConfigResponse?: shared.DescribeStudioLifecycleConfigResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
