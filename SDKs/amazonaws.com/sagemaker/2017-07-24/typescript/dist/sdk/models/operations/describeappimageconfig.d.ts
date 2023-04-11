import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAppImageConfigXAmzTargetEnum {
    SageMakerDescribeAppImageConfig = "SageMaker.DescribeAppImageConfig"
}
export declare class DescribeAppImageConfigRequest extends SpeakeasyBase {
    describeAppImageConfigRequest: shared.DescribeAppImageConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppImageConfigXAmzTargetEnum;
}
export declare class DescribeAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAppImageConfigResponse?: shared.DescribeAppImageConfigResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
